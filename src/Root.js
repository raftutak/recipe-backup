import React from 'react';
import AppContext from './context';
import axios from 'axios';

// REACT-ROUTER
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from './routes';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

// VIEWS
import Contact from './views/Contact';
import Home from './views/Home';
import Recipes from './views/Recipes';

// TEMPLATES
import MainTemplate from './templates/MainTemplate';

class Root extends React.Component {
  state = {
    search_input: ''
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleCheckboxChange = event => {
    const checkboxValue =
      event.target.type === 'checkbox' ? event.target.checked : null;

    this.setState({
      [event.target.name]: checkboxValue
    });
  };

  handleSubmitSearch = async event => {
    event.preventDefault();

    this.setState({
      search_isLoading: true,
      search_result: undefined
    });

    const query = this.state.search_input;

    let url = `https://recipe-search.projektstudencki.pl/recipe/searchRecipes/?search=${query}&count=10`;

    if (
      this.state.search_mainCategory !== undefined &&
      this.state.search_mainCategory !== '#'
    ) {
      url = url.concat(
        `&dishMainCategoryIds=${this.state.search_mainCategory}`
      );
    }

    if (
      this.state.search_subCategory !== undefined &&
      this.state.search_subCategory !== '#'
    ) {
      url = url.concat(`&dishSubCategoryIds=${this.state.search_subCategory}`);
    }

    const response = await axios(url);

    const search_result = await response.data.recipes;

    this.setState({ search_result, search_isLoading: false });
  };

  handleShowCategory = event => {
    event.preventDefault();
  };

  render() {
    const contextElements = {
      ...this.state,
      handleInputChange: this.handleInputChange,
      handleSubmitSearch: this.handleSubmitSearch
    };

    return (
      <>
        <BrowserRouter>
          <AppContext.Provider value={contextElements}>
            <Switch>
              <MainTemplate>
                <Route exact={true} path={routes.home} component={Home} />
                <Route path={routes.recipes} component={Recipes} />
                <Route path={routes.contact} component={Contact} />
              </MainTemplate>
            </Switch>
          </AppContext.Provider>
        </BrowserRouter>
      </>
    );
  }
}

export default Root;
