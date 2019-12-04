import React from 'react';
import {Table} from 'react-bootstrap';
import RecipeShowDialog from "./RecipeShowDialog";
import RecipeDeleteDialog from "./RecipeDeleteDialog";
import RecipeUpdateDialog from "./RecipeUpdateDialog";

const RecipeTable = ({recipes, deleteRecipe, updateRecipe}) => {

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
                    <td className="heading">Minutes to make</td>
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
                            <RecipeUpdateDialog oldRecipe={recipe} updateRecipe={updateRecipe} />
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