import { useState } from 'react';
import Section from 'components/Feedback/Section/Section';
import Statistics from 'components/Feedback/Statistics/Statistics';
import FeedbackOptions from 'components/Feedback/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Feedback/StyledFeedback';
export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = propertyReviews => {
    switch (propertyReviews) {
      case 'good':
        return setGood(prev => prev + 1);
      case 'neutral':
        return setNeutral(prev => prev + 1);
      case 'bad':
        return setBad(prev => prev + 1);
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }

    const result = (good / total) * 100;
    return Number(result.toFixed(0));
  };
  countTotalFeedback();
  countPositiveFeedbackPercentage();
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {!countTotalFeedback() ? (
          <Notification>There is no feedback</Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
}
