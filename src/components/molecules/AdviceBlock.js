import React from 'react';
import { sources } from '../../data/sources';
import styled, { css } from 'styled-components';
import block_bg_1 from '../../assets/img/block_bg_1.jpg';
import { Container } from 'react-bootstrap';

const containerContent = (
  <>
    <h5
      className="mb-3"
      style={{ color: 'white', textShadow: '0 0 5px hsla(0, 0%, 0%, 1)' }}
    >
      <strong>Kulinarna porada</strong>
    </h5>
    <p style={{ color: 'white', textShadow: '0 0 5px hsla(0, 0%, 0%, 1)' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim
      lorem vel dignissim imperdiet. Quisque et lacus venenatis, mollis lorem
      sed, scelerisque tortor. Quisque rutrum urna vitae leo sagittis, id
      dapibus nibh lobortis. Nulla facilisi.
    </p>
  </>
);

const StyledBlock = styled(Container)`
  background-image: url(${block_bg_1});
  background-position: right top;
  background-repeat: no-repeat;
  background-size: auto;
`;

const StyledInnerBlock = styled(Container)`
  padding: 30px 30px;
  text-align: center;

  p {
    margin: 0;
    font-size: 0.9rem;
  }

  ${({ grayoverlay }) =>
    grayoverlay &&
    css`
      color: white;
      background-color: rgba(30, 45, 66, 0.7);
    `}
`;

const AdviceBlock = () => (
  <>
    <StyledBlock>
      <StyledInnerBlock>
        <p>Test</p>
      </StyledInnerBlock>
    </StyledBlock>
  </>
);

export default AdviceBlock;
