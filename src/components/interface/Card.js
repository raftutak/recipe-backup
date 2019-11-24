import React from 'react';

import Heading from './Heading';
import Paragraph from './Paragraph';

const Card = ({ recipe }) => (
  <>
    <Heading small>{recipe.title}</Heading>
    <Paragraph small>{recipe.id}</Paragraph>
  </>
);

export default Card;
