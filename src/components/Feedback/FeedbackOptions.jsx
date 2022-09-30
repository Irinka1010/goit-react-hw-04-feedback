import PropTypes from 'prop-types';
import css from './FeedbackStyled.module.css';
export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <>
      <button className={css.button} onClick={() => onLeaveFeedback('good')}>
        Good
      </button>
      <button className={css.button} onClick={() => onLeaveFeedback('neutral')}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onLeaveFeedback('bad')}>
        Bad
      </button>
    </>
  );
}
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
