import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Title } from 'components/Feedback/Section/StyledSection';
export default function Section({ title, children }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <div>{children}</div>
    </Wrapper>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
