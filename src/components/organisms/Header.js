import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import header from '../../assets/img/header.jpg';

const StyledContainer = styled(Container)`
  margin: 0;
  padding: 32px 0;
  background-image: url(${header});
  background-position: center;
  background-repeat: no-repeat;
`;

const Header = () => (
  <>
    <StyledContainer fluid></StyledContainer>
  </>
);

export default Header;
