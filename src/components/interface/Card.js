import React from 'react';

import styled from 'styled-components';

import Heading from './Heading';
import Paragraph from './Paragraph';

const StyledCard = styled.div`
  background-color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;
  min-height: 500px;
  position: relative;

  :hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

const StyledImage = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: auto;
    transition: all 0.2s ease-in-out;

    :hover {
      transform: scale(1.1);
    }
  }
`;

const StyledDescription = styled.div`
  padding: 20px;
  text-align: left;
`;

const Card = ({ recipe }) => (
  <>
    <StyledCard>
      <StyledImage>
        <img src={recipe.image_Url} alt={recipe.title} />
      </StyledImage>
      <StyledDescription>
        <Heading small>{recipe.title}</Heading>
        <Paragraph small>{recipe.id}</Paragraph>
      </StyledDescription>
    </StyledCard>
  </>
);

export default Card;
