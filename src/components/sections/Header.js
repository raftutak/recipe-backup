import React from 'react';
import Slider from 'react-slick';

// STYLES
import styled from 'styled-components';

// BOOTSTRAP
import { Jumbotron, Container, Carousel, Button } from 'react-bootstrap';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// // COMPONENTS
// import Container from '../interface/Container';
// import Heading from '../interface/Heading';
// import Paragraph from '../interface/Paragraph';
// import Button from '../interface/Button';

// ASSETS
import slider_bg1 from '../../assets/img/slider_bg1.jpg';

// // DATA
// import { sliderContent } from '../../data/sliderContent';

// const StyledHeader = styled.header`
//   width: 100%;
//   background-image: url(${props => props.background});
//   background-position: center;
//   background-repeat: no-repeat;

//   @media (min-width: 700px) {
//     background-size: cover;
//   }
// `;

// const StyledWrapper = styled.div`
//   padding: 0 30px;
//   width: 95%;
//   text-align: left;

//   ${Paragraph} {
//     padding-top: 0;
//   }

//   ${Button} {
//     margin-top: 0;
//   }

//   @media (min-width: 700px) {
//     padding: 20px 0 20px 20px;
//     width: 65%;

//     ${Heading} {
//       font-size: 4rem;
//     }

//     ${Paragraph} {
//       font-size: 1.8rem;
//     }
//   }
// `;

// const StyledCarouselElement = styled.div`
//   width: 100%;
//   height: 440px;

//   @media (min-width: 700px) {
//     height: auto;
//   }
// `;

// const sliderSettings = {
//   infinite: true,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 5000,
//   vertical: true,
//   pauseOnHover: true,
//   arrows: false
// };

const StyledJumbotron = styled(Jumbotron)`
  margin: 0;
  background-image: url(${slider_bg1});
  background-position: center;
  background-repeat: no-repeat;
`;

const StyledContainer = styled(Container)``;

const InnerWrapper = styled(Container)`
  margin: 0;
  width: 65%;
`;

const Header = () => (
  <>
    <StyledJumbotron fluid>
      <StyledContainer>
        <InnerWrapper>
          <Carousel indicators={false} variant="dark">
            <Carousel.Item>
              <>
                <h1>Łatwe przepisy na każdą okazję</h1>
                <p>
                  Witaj na recipe-search! Jest to ogromna baza przepisów
                  zawierająca treści z najlepszych polskich blogów kulinarnych.
                  Od dziś nie musisz przeglądać wielu stron w poszukiwaniu
                  najlepszego lub najprostszego przepisu - wszystko znajdziesz w
                  jednym miejscu, właśnie tutaj. Przekonaj się sam korzystając z
                  wyszukiwarki poniżej!
                </p>
                <Button>Przejdź do przepisów</Button>
              </>
            </Carousel.Item>
            <Carousel.Item>
              <>
                <h1>Łatwe przepisy na każdą okazję</h1>
                <p>
                  Witaj na recipe-search! Jest to ogromna baza przepisów
                  zawierająca treści z najlepszych polskich blogów kulinarnych.
                  Od dziś nie musisz przeglądać wielu stron w poszukiwaniu
                  najlepszego lub najprostszego przepisu - wszystko znajdziesz w
                  jednym miejscu, właśnie tutaj. Przekonaj się sam korzystając z
                  wyszukiwarki poniżej!
                </p>
                <Button>Przejdź do przepisów</Button>
              </>
            </Carousel.Item>
            <Carousel.Item>
              <>
                <h1>Łatwe przepisy na każdą okazję</h1>
                <p>
                  Witaj na recipe-search! Jest to ogromna baza przepisów
                  zawierająca treści z najlepszych polskich blogów kulinarnych.
                  Od dziś nie musisz przeglądać wielu stron w poszukiwaniu
                  najlepszego lub najprostszego przepisu - wszystko znajdziesz w
                  jednym miejscu, właśnie tutaj. Przekonaj się sam korzystając z
                  wyszukiwarki poniżej!
                </p>
                <Button>Przejdź do przepisów</Button>
              </>
            </Carousel.Item>
          </Carousel>
        </InnerWrapper>
      </StyledContainer>
    </StyledJumbotron>
    {/* <StyledHeader background={slider_bg1}>
      <Container>
        <StyledWrapper>
          <Slider {...sliderSettings}>
            <StyledCarouselElement>
              <Heading medium>{sliderContent[0].heading}</Heading>
              <Paragraph medium>{sliderContent[0].paragraph}</Paragraph>
              <Button>Przepisy</Button>
            </StyledCarouselElement>
            <StyledCarouselElement>
              <Heading medium>{sliderContent[1].heading}</Heading>
              <Paragraph medium>{sliderContent[1].paragraph}</Paragraph>
              <Button>Przepisy</Button>
            </StyledCarouselElement>
            <StyledCarouselElement>
              <Heading medium>{sliderContent[2].heading}</Heading>
              <Paragraph medium>{sliderContent[2].paragraph}</Paragraph>
              <Button>Przepisy</Button>
            </StyledCarouselElement>
          </Slider>
        </StyledWrapper>
      </Container>
    </StyledHeader> */}
  </>
);

export default Header;
