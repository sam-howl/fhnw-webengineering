import React from 'react';
import RecipeTable from './RecipeTable';

class RecipeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        }
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
                <RecipeTable recipes={this.state.recipes} />
            </div>)
    }
}

export default RecipeContainer;