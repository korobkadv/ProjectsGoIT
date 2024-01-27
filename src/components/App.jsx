import React, { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { AppWrapper } from './App.styled';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

const options = ['Good', 'Neutral', 'Bad'];

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = evt => {
    const name = evt.target.name;
    const increaseByOne = prevState => prevState + 1;

    if (name === 'Good') {
      setGood(increaseByOne);
    }
    if (name === 'Neutral') {
      setNeutral(increaseByOne);
    }
    if (name === 'Bad') {
      setBad(increaseByOne);
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <AppWrapper>
      <Section>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      {positivePercentage >= 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}

      <GlobalStyle />
    </AppWrapper>
  );
};
