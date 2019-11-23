import styled, { css } from 'styled-components';

const Button = styled.button`
  margin: 20px 0;
  height: 45px;
  width: 170px;
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: #1e2d42;
  border: 1px solid #1e2d42;
  border-radius: 25px;
  outline: none;
  transition: 0.2s;
  cursor: pointer;

  :hover {
    background-color: #1e2d42;
    color: white;
  }

  ${({ light }) =>
    light &&
    css`
      border: 1px solid hsl(0, 100%, 100%);
      color: hsl(0, 100%, 100%);

      :hover {
        background-color: hsl(0, 100%, 100%);
        color: hsl(0, 0%, 0%);
      }
    `}
`;

export default Button;
