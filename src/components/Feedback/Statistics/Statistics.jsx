import PropTypes from 'prop-types';
import { List } from 'components/Feedback/Statistics/StyledStatistics';
export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positiveFeedback,
}) {
  return (
    <List>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positiveFeedback}% </li>
    </List>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
