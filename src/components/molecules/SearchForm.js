import React from 'react';
import AppContext from '../../context';
import styled from 'styled-components';

// BOOTSTRAP
import { Form, Col, InputGroup, Button } from 'react-bootstrap';

// DATA - ASSETS
import { categories } from '../../data/categories';

const SearchForm = () => (
  <AppContext.Consumer>
    {context => (
      <StyledForm autoComplete="off" onSubmit={context.handleSubmitSearch}>
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
    )}
  </AppContext.Consumer>
);

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

export default SearchForm;
