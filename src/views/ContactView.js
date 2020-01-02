import React from 'react';

// COMPONENTS
import LoadingDots from '../components/LoadingDots';
import Recommendations from '../components/Recommendations';
import ContactForm from '../components/ContactForm';

const ContactView = () => (
  <>
    <ContactForm />
    <LoadingDots />
    <LoadingDots />
  </>
);

export default ContactView;
