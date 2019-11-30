import React from 'react';
import RecipeTable from './RecipeTable';

class RecipeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        };
        this.deleteRecipe = this.deleteRecipe.bind(this)
    }

    deleteRecipe(id){
        fetch('http://localhost:8080/recipe/' + id, {
            method: 'DELETE'
        }).then(r => {
            if (r.ok){
                var recipes = this.state.recipes;
                recipes = recipes.filter((recipe) => {
                    return recipe.id !== id
                });
                this.setState({
                    recipes: recipes
                })
            }
        })
    }

    //Get recipes from controller
    componentDidMount() {
        fetch('http://localhost:8080/recipe')
            .then(r => r.json())
            .then(json => this.setState({recipes: json}))
            .catch(error => console.error('Error retrieving recipes: ' + error));
    }

    render() {
        return(
            <div>
                <h1>{this.state.recipes.length} recipes found</h1>
                <RecipeTable recipes={this.state.recipes} deleteRecipe={this.deleteRecipe} />
            </div>)
    }
}

export default RecipeContainer;