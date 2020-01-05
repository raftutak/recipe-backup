import React from 'react';
import styled from 'styled-components';
import ScrollUp from '../../utils/ScrollUp';
import { Button } from 'react-bootstrap';

const ScrollToTopButton = () => (
  <>
    <ScrollUp showUnder={160}>
      <StyledButton variant="secondary">Do góry</StyledButton>
    </ScrollUp>
  </>
);

const StyledButton = styled(Button)`
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

export default ScrollToTopButton;
