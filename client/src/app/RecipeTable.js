import React from 'react';
import { Table } from 'react-bootstrap';

const RecipeTable = ({ recipes }) => (

    <Table striped bordered hover >
        <thead>
        <tr>
            <td>Name</td>
            <td>Description</td>
            <td>Category</td>
            <td></td>
        </tr>
        </thead>
        <tbody>
        {recipes.map((recipe) =>
            <tr id={recipe.id} key={recipe.id}>
                <td>{recipe.name}</td>
                <td>{recipe.description}</td>
                <td>{recipe.category}</td>
                <td></td>
            </tr>
        )}
        </tbody>

    </Table>

);

export default RecipeTable;