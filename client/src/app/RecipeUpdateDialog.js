import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap'

const RecipeUpdateDialog = ({oldRecipe, updateRecipe}) => {

    let [showModal, setShowModal] = useState(false);
    let [recipe, setRecipe] = useState(oldRecipe);
    let [ingredient, setIngredient] = useState({});
    let [ingredients, setIngredients] = useState(oldRecipe.ingredients);
    let [validIngredient, setValidIngredient] = useState(true);
    let [validRecipe, setValidRecipe] = useState(true);

    const undoChanges = () => {
        //reset all changes to original values
        setIngredients(oldRecipe.ingredients);
        setRecipe(oldRecipe);
        close()
    };

    const close = () => {
        setShowModal(false);
        setValidIngredient(true);
        setValidRecipe(true);
    };

    const open = () => {
        setShowModal(true);
    };

    const changeRecipe = event =>
        setRecipe({ ...recipe, [event.target.name]: event.target.value });

    //change the attributes of a new ingredient
    const changeIngredient = event =>
        setIngredient({ ...ingredient, [event.target.name]: event.target.value });

    //update an existing ingredient
    const updateIngredients = (event, index) => {
        let ingredientList = ingredients;
        ingredientList[index][event.target.name] = event.target.value;
        setIngredients(ingredientList)
    };

    //test to check if field contains only spaces
    const checkIfBlank = (value) => {
        var trimmedValue = value.trim()
        if (trimmedValue == ''){
            return false
        }
        return true
    };

    const addIngredient = () => {
        //check if all requirements are fulfilled
        if (ingredient.amount && ingredient.amount.match("^[0-9]+([.,][0-9]+)?$") && ingredient.name
            && checkIfBlank(ingredient.name)){
            setIngredients([...ingredients, ingredient]);
            document.getElementById("amount").value = "";
            document.getElementById("unit").value = "";
            document.getElementById("ingredientname").value = "";
            setValidIngredient(true);
            setIngredient({})
        } else {
            setValidIngredient(false);
        }
    };

    //remove an ingredient from the list
    const removeIngredient = (index) => {
        var originalList = ingredients
        var ingredientsList = []
        for (var i = 0; i < originalList.length; i++) {
            if (i !== index){
                ingredientsList.push(originalList[i])
            }
        }
        setIngredients(ingredientsList)
    };

    const update = () => {
        //check if all requirements are fulfilled
        if (recipe.name && checkIfBlank(recipe.name) && recipe.description && checkIfBlank(recipe.description)
            && recipe.category && checkIfBlank(recipe.category) && recipe.minutesToMake
            && recipe.minutesToMake.toString().match("^[0-9]*$") && ingredients.length > 0){
            updateRecipe(recipe, ingredients);
            close()
        } else {
            setValidRecipe(false)
        }
    };

    return (
        <div>
            <Button color="secondary" onClick={ open }
                    className="actionButton">Update</Button>
            <Modal isOpen={ showModal } toggle={ undoChanges } size="lg" autoFocus={false} keyboard={ undoChanges }>
                <ModalHeader toggle={ undoChanges } >
                    Update a recipe
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label className="heading">Recipe name</Label>
                            <Input  type="text"
                                    name='name'
                                    required
                                    onChange={changeRecipe}
                                    maxLength="255"
                                    defaultValue={recipe.name}
                            />
                        </FormGroup>
                        <FormGroup>
                            <ul className="ingredient-list">
                                { ingredients.map((ingredient, index) => {
                                    return (
                                        <Row key={index}>
                                            <Label>Amount</Label>
                                            <Col>
                                                <Input  type="text"
                                                        name='amount'
                                                        pattern="^[0-9]+([.,][0-9]+)?$"
                                                        required
                                                        value={ingredient.amount || ''}
                                                        onChange={(event) => updateIngredients(event, index)}
                                                />
                                            </Col>
                                            <Label>Unit</Label>
                                            <Col>
                                                <Input  type="text"
                                                        name='unit'
                                                        onChange={(event) => updateIngredients(event, index)}
                                                        maxLength="255"
                                                        value={ingredient.unit || ''}
                                                />
                                            </Col>
                                            <Label>Ingredient name</Label>
                                            <Col>
                                                <Input  type="text"
                                                        name='name'
                                                        onChange={(event) => updateIngredients(event, index)}
                                                        required
                                                        maxLength="255"
                                                        value={ingredient.name || ''}
                                                />
                                            </Col>
                                            <Col>
                                                <Button color="outline-danger" onClick={ () => removeIngredient(index) } className="ingredient-button">-</Button>
                                            </Col>
                                        </Row>
                                    )
                                }) }
                            </ul>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Label>Amount</Label>
                                <Col>
                                    <Input  type="text"
                                            name='amount'
                                            id='amount'
                                            onChange={changeIngredient}
                                            pattern="^[0-9]+([.,][0-9]+)?$"
                                            required
                                    />
                                </Col>
                                <Label>Unit</Label>
                                <Col>
                                    <Input  type="text"
                                            name='unit'
                                            id='unit'
                                            onChange={changeIngredient}
                                            maxLength="255"
                                    />
                                </Col>
                                <Label>Ingredient name</Label>
                                <Col>
                                    <Input  type="text"
                                            name='name'
                                            id='ingredientname'
                                            onChange={changeIngredient}
                                            required
                                            maxLength="255"
                                    />
                                </Col>
                                <Col>
                                    <Button color="outline-success" onClick={ addIngredient } className="ingredient-button">+</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Label className="heading">Description</Label><br />
                            <textarea className="form-textarea"
                                      name='description'
                                      onChange={changeRecipe}
                                      maxLength="255"
                                      required
                                      defaultValue={recipe.description}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label className="heading">Expenditure of time in minutes</Label>
                            <Input  type="text"
                                    name='minutesToMake'
                                    onChange={changeRecipe}
                                    pattern="^[0-9]*$"
                                    required
                                    maxLength="255"
                                    defaultValue={recipe.minutesToMake}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label className="heading">Category</Label>
                            <Input  type="text"
                                    name='category'
                                    onChange={changeRecipe}
                                    required
                                    maxLength="255"
                                    defaultValue={recipe.category}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label className="heading">Picture URL</Label>
                            <Input  type="text"
                                    name='pictureUrl'
                                    onChange={changeRecipe}
                                    maxLength="255"
                                    defaultValue={recipe.pictureUrl}
                            />
                        </FormGroup>
                        <FormGroup>
                            { validIngredient ? null : <div className="formerrormessage">Ingredient cannot be added!
                                Please check your entries in the ingredient input fields. Possible reasons
                                for this error can be missing required fields, only blanks in a field or wrong type
                                in a field.</div> }
                            { validRecipe ? null : <div className="formerrormessage">Recipe cannot be updated! Please
                                check your entries in the recipe input fields. Possible reasons
                                for this error can be missing required fields, only blanks in a field, wrong type
                                in a field or missing ingredients in a recipe.</div> }
                        </FormGroup>
                        <FormGroup>
                            <Button className="modalButton" color="success"
                                    onClick={ update }>Update recipe</Button>
                            <Button className="modalButton" color="secondary"
                                    onClick={ undoChanges }>Close</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
};

export default RecipeUpdateDialog
