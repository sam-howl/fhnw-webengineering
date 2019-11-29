import React from 'react';
import {Table} from 'react-bootstrap';

const RecipeTable = ({recipes}) => {

        const getIngredients = (ingredients) => {
            var ingredientList = [];
            ingredients.map((ingredient) => {
                ingredientList.push(ingredient.name)
            });
            return ingredientList.join(", ")
        };

        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Required Ingredients</td>
                    <td>Category</td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                {recipes.map((recipe) =>
                    <tr id={recipe.id} key={recipe.id}>
                        <td>{recipe.name}</td>
                        <td>{getIngredients(recipe.ingredients)}</td>
                        <td>{recipe.category}</td>
                        <td></td>
                    </tr>
                )}
                </tbody>

            </Table>
        )

    };

export default RecipeTable;