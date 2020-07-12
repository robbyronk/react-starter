import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from './Box';
import GradientText from './GradientText';

const StyledAnswerCard = styled(Box)`
  align-items: start;
  height: 10rem;
`;

const AnswerCard = ({ answer }) => (
  <StyledAnswerCard white>
    <GradientText>{answer}</GradientText>
  </StyledAnswerCard>
);

AnswerCard.propTypes = {
  answer: PropTypes.string,
};

export default AnswerCard;
