import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackStyled.module.css';
export default function Section({ title, children }) {
  return (
    <div className={css.feedbackWrapper}>
      <h2 className={css.title}>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
