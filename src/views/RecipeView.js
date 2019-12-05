import React from 'react';
import axios from 'axios';
import AppContext from '../context';

class RecipeView extends React.Component {
  componentDidMount = async event => {
    this.setState({
      recipe_isLoading: true,
      recipe: undefined
    });

    let { id } = this.props.match.params;

    let url = `https://recipe-search.projektstudencki.pl/recipe/searchRecipes/?id=${id}`;
    const response = await axios(url);
    const recipe_result = await response.data.recipe;

    this.setState({ recipe: recipe_result, recipe_isLoading: false });

    console.log(this.state.recipe);
  };

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <>
            <h3>test</h3>
          </>
        )}
      </AppContext.Consumer>
    );
  }
}
export default RecipeView;
