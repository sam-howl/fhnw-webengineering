import React from 'react';
import RecipeTable from './RecipeTable';
import RecipeCreateDialog from "./RecipeCreateDialog";
import {SERVER_URL} from "../config"

class RecipeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        };
        this.createRecipe = this.createRecipe.bind(this);
        this.updateRecipe = this.updateRecipe.bind(this);
        this.deleteRecipe = this.deleteRecipe.bind(this);
    }

    //Create a recipe and save it into the in-memory database
    createRecipe(recipe, ingredients){
        fetch(SERVER_URL + "recipe", {
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

    //Update a recipe in the in-memory database
    updateRecipe(recipe, ingredients){
        console.log("I'm a update function")
    }

    //Delete a recipe from the in-memory database
    deleteRecipe(id){
        fetch(SERVER_URL + 'recipe/' + id, {
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
        fetch(SERVER_URL + 'recipe')
            .then(r => r.json())
            .then(json => this.setState({recipes: json}))
            .catch(error => console.error('Error retrieving recipes: ' + error));
    }

    render() {
        return(
            <div>
                <RecipeCreateDialog createRecipe={this.createRecipe}/>
                <RecipeTable recipes={this.state.recipes} deleteRecipe={this.deleteRecipe} updateRecipe={this.updateRecipe()} />
            </div>)
    }
}

export default RecipeContainer;