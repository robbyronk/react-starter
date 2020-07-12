import styled from 'styled-components';

const Button = styled.button`
  border: 0;
  box-shadow: ${({ theme }) => theme.border};
  background: ${({ theme }) => `${theme.vertGrad}, ${theme.light}`};
  text-decoration: none;
  padding: ${({ theme }) => `${theme.spacerHalf} ${theme.spacer}`};

  &:hover {
    background: ${({ theme }) => `${theme.vertGrad}, ${theme.altColorGrad}`};
  }
`;

export default Button;
