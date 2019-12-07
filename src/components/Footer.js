import React from 'react';

// STYLES
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

// ASSETS

const StyledTest = styled.div`
  padding: 30px;
`;

const StyledSearch = styled.div`
  background-color: #e9e9e9;
  margin: 0 auto;
  padding: 30px;
  font-family: 'Merriweather', serif;

  h2 {
    padding-bottom: 20px;
    font-weight: 600;
  }
`;

const StyledFooter = styled.footer`
  text-align: center;
  background-color: #fff;
  padding: 20px;
  padding-bottom: 0;
  color: #ccc;

  i {
    padding: 0 10px 15px 10px;
    font-size: 2rem;
    color: #cccccc;
    transition: 0.2s;

    :hover {
    cursor: pointer;
    color: #222223;
  }
`;

const Footer = () => (
  <>
    <StyledSearch>
      <Container style={{ 'text-align': 'center' }}>
        <h4>Lorem ipsum</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
          alias. Perspiciatis possimus officiis a nulla dolore doloremque
          suscipit fugiat molestias necessitatibus. Nostrum, optio fugit!
          Architecto quod voluptates dolor ea magnam.
        </p>
      </Container>
    </StyledSearch>

    <StyledFooter>
      <Container style={{ 'text-align': 'center' }}>
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter-square"></i>
        <p>Copyright &copy; recipe-search</p>
      </Container>
    </StyledFooter>
  </>
);

export default Footer;