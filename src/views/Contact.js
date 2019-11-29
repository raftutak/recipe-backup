import React from 'react';

// COMPONENTS
import LoaderSpinner from '../components/interface/LoaderSpinner';
import RecipeCard from '../components/interface/RecipeCard';

import { Container } from 'react-bootstrap';

const Contact = () => (
  <>
    <LoaderSpinner type="ThreeDots" color="#ddd" height={50} width={50} />
  </>
);

export default Contact;
