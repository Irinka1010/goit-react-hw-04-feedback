import { Component } from 'react';
import Section from 'components/Feedback/Section';
import Statistics from 'components/Feedback/Statistics';
import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import css from './FeedbackStyled.module.css';
export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = propertyReviews => {
    this.setState(prevState => {
      const value = prevState[propertyReviews];
      return {
        [propertyReviews]: value + 1,
      };
    });
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage(propertyReviews) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state[propertyReviews];
    const result = (value / total) * 100;
    return Number(result.toFixed(0));
  }
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage('good');
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {!total ? (
            <p className={css.notification}>There is no feedback</p>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback={positiveFeedback}
            />
          )}
        </Section>
      </>
    );
  }
}
