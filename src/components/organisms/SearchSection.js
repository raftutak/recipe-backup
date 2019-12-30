import React from 'react';
import AppContext from '../../context';
import styled from 'styled-components';

// BOOTSTRAP
import { Container, Col, Form, InputGroup, Button } from 'react-bootstrap';

// DATA - ASSETS
import { categories } from '../../data/categories';
import search from '../../assets/img/search.png';

const SearchSection = () => (
  <AppContext.Consumer>
    {context => (
      <>
        <StyledSearchContainer fluid>
          <StyledBackground fluid />
          <Container>
            <h5
              className="mb-4"
              style={
                {
                  // color: 'white',
                  // textShadow: '0 0 5px hsla(0, 0%, 0%, 1)'
                }
              }
            >
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
                      id="search-form"
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
        </StyledSearchContainer>
      </>
    )}
  </AppContext.Consumer>
);

const StyledSearchContainer = styled(Container)`
  position: relative;
  padding: 30px 0;
  text-align: center;
  background-color: hsl(0, 0%, 95%);
  z-index: 1;
`;

const StyledBackground = styled(Container)`
  position: absolute;
  top: 0;
  height: 100%;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.1;

  @media (min-width: 992px) {
    background-position-y: -80px;
  }
`;

const StyledForm = styled(Form)`
  margin: 0 auto;
  width: 80%;

  .form-control {
    border: none;
    border-radius: 15px;
  }

  .btn-secondary {
    padding: 0 20px;
    border: none;
    border-radius: 0 15px 15px 0;

    :hover {
      background-color: hsl(44, 60%, 42%);
    }
  }
`;

export default SearchSection;
