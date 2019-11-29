import React from 'react';
import AppContext from '../../context';

// STYLES
import styled from 'styled-components';

// // COMPONENTS
// import Container from '../interface/Container';
// import Button from '../interface/Button';
// import Heading from '../interface/Heading';

// BOOTSTRAP

import { Container, Col, Form, InputGroup, Button } from 'react-bootstrap';

// ASSETS
import search_bg1 from '../../assets/img/search_bg1.jpg';

// DATA
import { categories } from '../../data/categories';

// const StyledSearchForm = styled.section`
//   position: relative;
//   width: 100%;
//   box-shadow: 0 0 10px 0 hsla(0, 0%, 0%, 0.05);

//   ::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     background-image: url(${search_bg1});
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-attachment: fixed;
//     opacity: 0.2;
//     filter: contrast(0.6) grayscale(1);
//     z-index: -15;
//   }

//   @media (min-width: 700px) {
//     ${Heading} {
//       font-size: 3rem;
//     }
//   }
// `;

// const StyledButton = styled(Button)`
//   margin: 0;
//   padding: 10px 20px;
//   width: auto;
//   border-radius: 25px;
//   border: none;
//   border-left-width: 0;
//   border-top-left-radius: 0;
//   border-bottom-left-radius: 0;
//   background-color: #ddd;
//   /* margin-left: -80px;
//   padding: 10px 14px;
//   width: auto;
//   font-family: 'Poppins', sans-serif;
//   font-size: 1.6rem;
//   border-radius: 25px;
//   border-top-left-radius: 0px;
//   border-bottom-left-radius: 0px;
//   background-color: #ddd;
//   border: none;
//   transition: 0.2s;
//   cursor: pointer;

//   :hover {
//     color: white;
//     background-color: #1e2d42; */
//   /* } */
// `;

const StyledContainer = styled(Container)`
  padding: 30px 0;
  background-color: #ddd;
  /* background-image: url(${search_bg1});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  opacity: 0.2;
  filter: contrast(0.6) grayscale(1); */
`;

// const InnerWrapper = styled(Container)``;

// const StyledFormGroup = styled(Form.Group)`
//   position: relative;
// `;

// const StyledFormControl = styled(Form.Control)`
//   display: block;
//   width: 100%;
//   height: 45px;
//   padding: 0 0.75rem;
//   line-height: 1.5;
//   background-clip: padding-box;
//   /* border: 1px solid #ced4da; */
//   border: none;
//   border-radius: 15px;
// `;

// const StyledButton = styled(Button)`
//   position: absolute;
//   top: 0;
//   right: 0;
//   padding: 0 25px;
//   height: 45px;
//   border: none;
//   border-radius: 0 15px 15px 0;
// `;

const StyledForm = styled(Form)`
  margin: 0 auto;
  width: 80%;

  .form-control {
    border-radius: 15px;
  }
`;

const SearchForm = () => (
  <AppContext.Consumer>
    {context => (
      <>
        <StyledContainer fluid>
          <Container>
            <StyledForm
              autoComplete="off"
              onSubmit={context.handleSubmitSearch}
            >
              <Form.Row className="mb-3">
                <Col>
                  <InputGroup>
                    <Form.Control
                      name="search_input"
                      type="search"
                      value={context.search_input}
                      onChange={context.handleInputChange}
                      as="input"
                      placeholder="Wpisz szukaną frazę ..."
                    />
                    <InputGroup.Append>
                      <Button type="submit" variant="secondary">
                        Szukaj
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Group>
                    <Form.Control as="select">
                      <option value="#">Wybierz kategorię</option>
                      {categories.map(item => {
                        return <option value={item.id}>{item.name}</option>;
                      })}
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Control as="select">
                      <option value="#">Wybierz podkategorię</option>
                      {context.search_mainCategory !== undefined &&
                      context.search_mainCategory !== '#'
                        ? categories[
                            parseInt(context.search_mainCategory) - 1
                          ].subcategories.map(item => {
                            return <option value={item.id}>{item.name}</option>;
                          })
                        : null}
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Form.Row>
            </StyledForm>
          </Container>
        </StyledContainer>
        {/* <StyledSearchForm>
          <Container>
            <StyledWrapper>
              <Heading small>Wyszukaj przepis na dziś</Heading>
              <StyledForm
                autoComplete="off"
                onSubmit={context.handleSubmitSearch}
              >
                <StyledSearch
                  name="search_input"
                  type="search"
                  placeholder="Wpisz szukaną frazę..."
                  value={context.search_input}
                  onChange={context.handleInputChange}
                />
                <StyledButton id="search_submitButton" type="submit">
                  Szukaj
                </StyledButton>
                {/* <br />
                <StyledSelectCategory
                  name="search_mainCategory"
                  value={context.search_mainCategory}
                  onChange={context.handleInputChange}
                >
                  <option value="#">Wybierz kategorię</option>
                  {categories.map(item => {
                    return <option value={item.id}>{item.name}</option>;
                  })}
                </StyledSelectCategory>
                <StyledSelectCategory
                  name="search_subCategory"
                  value={context.search_subCategory}
                  onChange={context.handleInputChange}
                  disabled={
                    context.search_mainCategory === undefined ||
                    context.search_mainCategory === '#'
                  }
                >
                  <option value="#">Wybierz podkategorię</option>
                  {context.search_mainCategory !== undefined &&
                  context.search_mainCategory !== '#'
                    ? categories[
                        parseInt(context.search_mainCategory) - 1
                      ].subcategories.map(item => {
                        return <option value={item.id}>{item.name}</option>;
                      })
                    : null}
                </StyledSelectCategory> */}
        {/* </StyledForm>
            </StyledWrapper>
          </Container>
        </StyledSearchForm> */}{' '}
      </>
    )}
  </AppContext.Consumer>
);

export default SearchForm;
