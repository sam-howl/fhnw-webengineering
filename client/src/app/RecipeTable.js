import React from 'react';
import {Table} from 'react-bootstrap';
import RecipeShowDialog from "./RecipeShowDialog";
import RecipeDeleteDialog from "./RecipeDeleteDialog";

const RecipeTable = ({recipes, deleteRecipe}) => {

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
                    <td className="heading">Name</td>
                    <td className="heading">Required Ingredients</td>
                    <td className="heading">Minutes to make this dish</td>
                    <td className="heading">Category</td>
                    <td className="heading">Actions</td>
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
                        <div className="btn-group" role="group">
                            <RecipeShowDialog recipe={recipe} />
                            <RecipeDeleteDialog deleteRecipe={deleteRecipe} recipeId={recipe.id} />
                        </div>
                        </td>
                    </tr>
                )}
                </tbody>

            </Table>
        )

    };

export default RecipeTable;