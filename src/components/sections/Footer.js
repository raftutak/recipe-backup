import React from 'react';

// STYLES
import styled from 'styled-components';

// ASSETS
import slider_bg2 from '../../assets/img/slider_bg2.jpg';

const StyledContainer = styled.div`
  font-family: 'Merriweather', serif;
  display: flex;
  margin: 0 auto;
  text-align: center;
`;

const StyledContainer2 = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const StyledSlider = styled.div`
  background-image: url(${slider_bg2});
  background-position: right top;
  background-repeat: no-repeat;
  background-size: auto;
  color: white;
`;

const StyledSliderWrapper = styled.div`
  padding: 30px;
  background-color: rgba(30, 45, 66, 0.7);

  h2 {
    padding-bottom: 20px;
    font-weight: 600;
  }

  p {
    font-size: 1.6rem;
  }
`;

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

  p {
    font-size: 1.6rem;
  }
`;

const StyledFooter = styled.footer`
  text-align: center;
  background-color: #fff;
  padding: 20px;
  color: #ccc;

  p {
      font-size: 12px;
  }

  i {
    padding: 0 10px 15px 10px;
    font-size: 3rem;
    color: #cccccc;
    transition: 0.2s;

    :hover {
    cursor: pointer;
    color: #222223;
  }
`;

const StyledWrapper2 = styled.div`
  h2 {
    padding-bottom: 20px;
    font-weight: 600;
  }

  p {
    font-size: 1.6rem;
  }
`;

const Footer = () => (
  <>
    <StyledContainer>
      <StyledSlider>
        <StyledSliderWrapper>
          <h2>Przepis tygodnia</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
            alias. Perspiciatis possimus officiis a nulla dolore doloremque
            suscipit fugiat molestias necessitatibus. Nostrum, optio fugit!
            Architecto quod voluptates dolor ea magnam.
          </p>
        </StyledSliderWrapper>
      </StyledSlider>

      <StyledTest>
        <StyledWrapper2>
          <h2>Polecany blog</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
            alias. Perspiciatis possimus officiis a nulla dolore doloremque
            suscipit fugiat molestias necessitatibus. Nostrum, optio fugit!
            Architecto quod voluptates dolor ea magnam.
          </p>
        </StyledWrapper2>
      </StyledTest>
    </StyledContainer>

    <StyledSearch>
      <StyledContainer2>
        <h2>Lorem ipsum</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
          alias. Perspiciatis possimus officiis a nulla dolore doloremque
          suscipit fugiat molestias necessitatibus. Nostrum, optio fugit!
          Architecto quod voluptates dolor ea magnam.
        </p>
      </StyledContainer2>
    </StyledSearch>

    <StyledFooter>
      <StyledContainer2>
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter-square"></i>
        <p>Copyright &copy; recipe-search</p>
      </StyledContainer2>
    </StyledFooter>
  </>
);

export default Footer;
