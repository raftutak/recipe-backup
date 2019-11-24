import React from 'react';
import AppContext from '../../context';

// STYLES
import styled from 'styled-components';

// COMPONENTS
import Container from '../interface/Container';
import Button from '../interface/Button';
import Heading from '../interface/Heading';

// ASSETS
import search_bg1 from '../../assets/img/search_bg1.jpg';

// DATA
import { categories } from '../../data/categories';

const StyledSearchForm = styled.section`
  position: relative;
  width: 100%;
  box-shadow: 0 0 10px 0 hsla(0, 0%, 0%, 0.05);

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
    opacity: 0.2;
    filter: contrast(0.6) grayscale(1);
    z-index: -15;
  }

  @media (min-width: 700px) {
    ${Heading} {
      font-size: 3rem;
    }
  }
`;

const StyledWrapper = styled.div`
  padding: 20px 30px;

  @media (max-width: 700px) {
    ${Heading} {
      padding-top: 0;
    }
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (min-width: 700px) {
    margin: 0 auto;
    padding: 20px 0;
    width: 70%;
  }
`;

const StyledSearch = styled.input`
  flex-grow: 2;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  color: #222223;
  border-right-width: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  ::placeholder {
    color: #222223;
  }

  :focus {
    outline: none;
  }
`;

const StyledSelectCategory = styled.select`
  margin: 20px 10px 0 10px;
  padding: 0 70px 0 20px;
  height: 45px;
  border: none;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  border-radius: 25px;
  color: #222223;
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    radial-gradient(#ddd 70%, transparent 72%);
  background-position: calc(100% - 25px) calc(1em + 5.5px),
    calc(100% - 20px) calc(1em + 5.5px), calc(100% - 0.8em) 0.7em;
  background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
  background-repeat: no-repeat;
  appearance: none;
  transition: 0.2s;

  :focus {
    outline: none;
    background-image: linear-gradient(45deg, white 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, white 50%),
      radial-gradient(gray 70%, transparent 72%);
    background-position: calc(100% - 20px) 1.28em, calc(100% - 25px) 1.28em,
      calc(100% - 0.8em) 0.7em;
    background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
    background-repeat: no-repeat;
  }

  :disabled {
    background-color: #ddd;
    background-image: linear-gradient(45deg, transparent 50%, #ddd 50%),
      linear-gradient(135deg, #ddd 50%, transparent 50%),
      radial-gradient(#c2c0c0 70%, transparent 72%);
    background-position: calc(100% - 25px) calc(1em + 5.5px),
      calc(100% - 20px) calc(1em + 5.5px), calc(100% - 0.8em) 0.7em;
    background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
    color: #c2c0c0;
  }
`;

const StyledButton = styled(Button)`
  margin: 0;
  padding: 10px 20px;
  width: auto;
  border-radius: 25px;
  border: none;
  border-left-width: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: #ddd;
  /* margin-left: -80px;
  padding: 10px 14px;
  width: auto;
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  border-radius: 25px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  background-color: #ddd;
  border: none;
  transition: 0.2s;
  cursor: pointer;

  :hover {
    color: white;
    background-color: #1e2d42; */
  /* } */
`;

const SearchForm = () => (
  <AppContext.Consumer>
    {context => (
      <>
        <StyledSearchForm>
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
              </StyledForm>
            </StyledWrapper>
          </Container>
        </StyledSearchForm>
      </>
    )}
  </AppContext.Consumer>
);

export default SearchForm;
