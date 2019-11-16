import styled, { css } from 'styled-components';

const Heading = styled.h1`
  padding: 40px 0;
  font-family: 'Merriweather';
  font-size: 2.4rem;

  ${({ big }) =>
    big &&
    css`
      font-size: 4rem;
    `}

  ${({ small }) =>
    small &&
    css`
      font-size: 2rem;
    `}
`;

export default Heading;
