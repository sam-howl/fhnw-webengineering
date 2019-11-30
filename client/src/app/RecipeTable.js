import React from 'react';
import {Table} from 'react-bootstrap';
import RecipeShowDialog from "./RecipeShowDialog";

const RecipeTable = ({recipes}) => {

        const getIngredientsNames = (ingredients) => {
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
                    <td>Minutes to make this dish</td>
                    <td>Category</td>
                    <td>Actions</td>
                </tr>
                </thead>
                <tbody>
                {recipes.map((recipe) =>
                    <tr id={recipe.id} key={recipe.id}>
                        <td>{recipe.name}</td>
                        <td>{getIngredientsNames(recipe.ingredients)}</td>
                        <td>{recipe.minutesToMake}</td>
                        <td>{recipe.category}</td>
                        <td>
                        <div className="btn-group float-right" role="group">
                            <RecipeShowDialog recipe={recipe} />
                        </div>
                        </td>
                    </tr>
                )}
                </tbody>

            </Table>
        )

    };

export default RecipeTable;