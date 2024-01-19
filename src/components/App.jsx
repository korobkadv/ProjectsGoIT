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
  };

  updateState = evt => {
    this.setState(prevState => {
      const name = evt.target.name;

      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return Math.round((good / totalFeedback) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <AppWrapper>
        <Section>
          <FeedbackOptions updateState={this.updateState} />
        </Section>
        {positivePercentage >= 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
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
