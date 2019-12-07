import React from 'react';
import AppContext from '../context';

// STYLES
import styled from 'styled-components';

// BOOTSTRAP
import { Container, Col, Form, InputGroup, Button } from 'react-bootstrap';

// ASSETS
import search_bg1 from '../assets/img/search_bg1.jpg';

// DATA
import { categories } from '../data/categories';

const StyledContainer = styled(Container)`
  position: relative;
  padding: 30px 0;
  text-align: center;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url(${search_bg1});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    filter: opacity(0.3) contrast(0.6) grayscale(1);
    z-index: -1;
  }
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

  .btn-secondary {
    padding: 0 20px;
    border-radius: 0 15px 15px 0;
  }
`;


const SearchForm = () => (
  <AppContext.Consumer>
    {context => (
      <>
        <StyledContainer fluid>
          <Container>
            <h5 className="mb-4">
              <strong>Wyszukaj przepis na dziś</strong>
            </h5>
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
                      required
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
                    <Form.Control
                      name="search_mainCategory"
                      value={context.search_mainCategory}
                      onChange={context.handleInputChange}
                      as="select"
                    >
                      <option value="">Wybierz kategorię główną</option>
                      {categories.map(item => {
                        return (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Control
                      name="search_subCategory"
                      value={context.search_subCategory}
                      onChange={context.handleInputChange}
                      as="select"
                      disabled={context.search_mainCategory ? false : true}
                    >
                      <option value="">Wybierz podkategorię</option>
                      {context.search_mainCategory
                        ? categories[
                            parseInt(context.search_mainCategory) - 1
                          ].subcategories.map(item => {
                            return (
                              <option key={item.id} value={item.id}>
                                {item.name}
                              </option>
                            );
                          })
                        : null}
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Form.Row>
            </StyledForm>
          </Container>
        </StyledContainer>
      </>
    )}
  </AppContext.Consumer>
);

export default SearchForm;
