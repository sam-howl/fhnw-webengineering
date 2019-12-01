import React from 'react';
import RecipeTable from './RecipeTable';
import RecipeCreateDialog from "./RecipeCreateDialog";

class RecipeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        };
        this.createRecipe = this.createRecipe.bind(this);
        this.deleteRecipe = this.deleteRecipe.bind(this);
    }

    createRecipe(recipe, ingredients){
        fetch("http://localhost:8080/recipe", {
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            body: JSON.stringify({
                'name': recipe.name,
                'description': recipe.description,
                'category': recipe.category,
                'minutesToMake': recipe.minutesToMake,
                'pictureUrl' : recipe.pictureUrl,
                'ingredients' : ingredients
            })
        }).then(r => r.json())
            .then(json => this.setState({
                recipes: [...this.state.recipes, json]
            }))
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
                <RecipeCreateDialog createRecipe={this.createRecipe}/>
                <RecipeTable recipes={this.state.recipes} deleteRecipe={this.deleteRecipe} />
            </div>)
    }
}

export default RecipeContainer;