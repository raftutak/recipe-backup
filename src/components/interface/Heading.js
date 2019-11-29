import styled, { css } from 'styled-components';

const Heading = styled.h1`
  padding-top: 20px;
  font-family: 'Merriweather', sans-serif;
  font-size: 1.6rem;
  color: ${props => props.color};

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
