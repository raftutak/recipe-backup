import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  padding: 20px 0;
  font-size: 1.6rem;
  color: ${props => props.color};

  ${({ big }) =>
    big &&
    css`
      font-size: 1.8rem;
    `};

  ${({ medium }) =>
    medium &&
    css`
      font-size: 1.6rem;
    `}

  ${({ small }) =>
    small &&
    css`
      font-size: 1.4rem;
    `}
`;

export default Paragraph;
