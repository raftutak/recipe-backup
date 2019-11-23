import styled, { css } from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;

  ${({ right }) =>
    right &&
    css`
      float: right;
    `}
`;

export default Container;
