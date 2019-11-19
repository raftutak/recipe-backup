import React from 'react';
import Loader from 'react-loader-spinner';

// STYLES

// STYLES
import styled from 'styled-components';
import '../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// COMPONENTS
import Container from '../interface/Container';

const StyledWrapper = styled.div`
  padding: 40px;
  text-align: center;
`;

const LoaderSpinner = () => (
  <>
    <StyledWrapper>
      <Container>
        <Loader type="ThreeDots" color="#ddd" height={70} width={70} />
      </Container>
    </StyledWrapper>
  </>
);

export default LoaderSpinner;
