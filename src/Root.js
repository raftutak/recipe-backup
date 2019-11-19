import React from 'react';
import AppContext from './context';
import axios from 'axios';

// REACT-ROUTER
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from './routes';

// VIEWS
import Contact from './views/Contact';
import Home from './views/Home';
import Recipes from './views/Recipes';

// TEMPLATES
import MainTemplate from './templates/MainTemplate';

class Root extends React.Component {
  state = {};

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
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
