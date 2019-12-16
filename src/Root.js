import React from 'react';
import AppContext from './context';
import axios from 'axios';

// REACT-ROUTER
import { Router, Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import history from './utils/history';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

// VIEWS
import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import RecipeView from './views/RecipeView';
import CalculatorView from './views/CalculatorView';
import ContactView from './views/ContactView';
import ProfileView from './views/ProfileView';

// TEMPLATES
import MainTemplate from './templates/MainTemplate';

class Root extends React.Component {
  state = {
    search_input: '',
    showLoginModal: false,
    showRegistrationModal: false,
    category_id: 1
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

  handleInitialSearch = async () => {
    this.setState({ search_isLoading: true, search_result: undefined });

    const url = `https://recipe-search.projektstudencki.pl/recipe/searchRecipes/?search=makaron&count=12`;

    const response = await axios(url);
    const search_result = await response.data.recipes;

    this.setState({ search_isLoading: false, search_result });
  };

  handleSubmitSearch = async event => {
    event.preventDefault();

    this.setState({
      search_isLoading: true,
      search_result: undefined
    });

    const query = this.state.search_input;
    let url = `https://recipe-search.projektstudencki.pl/recipe/searchRecipes/?search=${query}&count=8`;

    if (this.state.search_mainCategory) {
      url = url.concat(
        `&dishMainCategoryIds=${this.state.search_mainCategory}`
      );
    }
    if (this.state.search_subCategory) {
      url = url.concat(`&dishSubCategoryIds=${this.state.search_subCategory}`);
    }

    const response = await axios(url);
    const search_result = await response.data.recipes;
    // console.log(search_result);

    this.setState({ search_isLoading: false, search_result });

    document
      .getElementById('search-form')
      .scrollIntoView({ behavior: 'smooth' });
  };

  handleShowCategory = async event => {
    const cat_id = event ? event.target.value : 1;

    await this.setState({
      categories_isLoading: true,
      categories_result: undefined,
      category_id: cat_id
    });

    const id = this.state.category_id;
    const url = `https://recipe-search.projektstudencki.pl/recipe/searchRecipes/?search=&count=12&dishMainCategoryIds=${id}`;

    const response = await axios(url);
    const categories_result = await response.data.recipes;

    this.setState({ categories_result, categories_isLoading: false });
  };

  handleReadRecipe = () => {};

  handleShowLoginModal = event => {
    this.setState({ showLoginModal: !this.state.showLoginModal });
  };

  handleShowRegistrationModal = event => {
    this.setState({ showRegistrationModal: !this.state.showRegistrationModal });
  };

  componentDidMount() {
    this.handleInitialSearch();
    this.handleShowCategory();
  }

  render() {
    const contextElements = {
      ...this.state,
      handleInputChange: this.handleInputChange,
      handleSubmitSearch: this.handleSubmitSearch,
      handleShowCategory: this.handleShowCategory,
      handleReadRecipe: this.handleReadRecipe,
      handleShowLoginModal: this.handleShowLoginModal,
      handleShowRegistrationModal: this.handleShowRegistrationModal
    };

    return (
      <>
        <Router history={history}>
          <AppContext.Provider value={contextElements}>
            <Switch>
              <MainTemplate>
                <Route exact path={routes.home} component={HomeView} />
                <Route path={routes.categories} component={CategoriesView} />
                <Route
                  path={routes.recipe}
                  render={props => <RecipeView id={props.match.params.id} />}
                />
                <Route path={routes.calculatorBMI} component={CalculatorView} />
                <Route path={routes.contact} component={ContactView} />
                <Route path={routes.profile} component={ProfileView} />
              </MainTemplate>
            </Switch>
          </AppContext.Provider>
        </Router>
      </>
    );
  }
}

export default Root;
