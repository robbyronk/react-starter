import styled from 'styled-components';

const GradientText = styled.span`
  background: ${({ theme }) => theme.colorGrad};
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default GradientText;
