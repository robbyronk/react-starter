import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import PropTypes from 'prop-types';

const StyledQuestionCard = styled(Box)`
  align-items: start;
  height: 10rem;
`;

const QuestionCard = ({ question }) => (
  <StyledQuestionCard>{question}</StyledQuestionCard>
);

QuestionCard.propTypes = {
  question: PropTypes.string,
};

export default QuestionCard;
