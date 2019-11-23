import styled, { css } from 'styled-components';

const Heading = styled.h1`
  padding: 20px 0;
  font-family: 'Merriweather', sans-serif;
  font-size: 3rem;

  ${({ big }) =>
    big &&
    css`
      font-size: 4rem;
    `}

  ${({ medium }) =>
    medium &&
    css`
      font-size: 3rem;
    `}

  ${({ small }) =>
    small &&
    css`
      font-size: 2rem;
    `}
`;

export default Heading;
