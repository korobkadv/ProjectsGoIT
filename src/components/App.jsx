import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { AppWrapper } from './App.styled';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  onLeaveFeedback = evt => {
    this.setState(prevState => {
      const name = evt.target.name;

      return {
        [name]: prevState[name] + 1,
        total: prevState.total + 1,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    const { good, total } = this.state;
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad, total } = this.state;
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <AppWrapper>
        <Section>
          <FeedbackOptions
            options={{ good, neutral, bad }}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {positivePercentage >= 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}

        <GlobalStyle />
      </AppWrapper>
    );
  }
}
