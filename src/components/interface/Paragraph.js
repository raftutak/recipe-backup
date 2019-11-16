import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  padding-bottom: 40px;
  font-size: 1.6rem;

  ${({ big }) =>
    big &&
    css`
      font-size: 1.8rem;
    `};
`;

export default Paragraph;
