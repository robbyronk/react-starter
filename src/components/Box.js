import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.spacer};
  padding: ${({ theme }) => theme.spacer};
  background: ${({ white, theme }) =>
    white
      ? `${theme.vertGrad} ${theme.light}`
      : `${theme.vertGrad}, ${theme.colorGrad}`};
  color: ${({ white, theme }) => (white ? theme.color : theme.light)};
`;

export default Box;
