import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap'

const RecipeCreateDialog = ({createRecipe}) => {

    let [showModal, setShowModal] = useState(false);
    let [recipe, setRecipe] = useState({});
    let [ingredient, setIngredient] = useState({});
    let [ingredients, setIngredients] = useState([]);
    let [validIngredient, setValidIngredient] = useState(true);
    let [validRecipe, setValidRecipe] = useState(true);

    const close = () => {
        setShowModal(false);
        setIngredients([]);
        setValidIngredient(true);
        setValidRecipe(true);
    };

    const open = () => setShowModal(true);

    const changeRecipe = event =>
        setRecipe({ ...recipe, [event.target.name]: event.target.value });

    const changeIngredient = event =>
        setIngredient({ ...ingredient, [event.target.name]: event.target.value });

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

    const create = () => {
        //check if all requirements are fulfilled
        if (recipe.name && checkIfBlank(recipe.name) && recipe.description && checkIfBlank(recipe.description)
            && recipe.category && checkIfBlank(recipe.category) && recipe.minutesToMake
            && recipe.minutesToMake.match("^[0-9]*$") && ingredients.length > 0){
            createRecipe(recipe, ingredients);
            close()
        } else {
            setValidRecipe(false)
        }
    };

    return (
        <div>
            <Button color="success" onClick={ open }
                    className="createButton">Create recipe</Button>
            <Modal isOpen={ showModal } toggle={ close } size="lg" autoFocus={false}>
                <ModalHeader toggle={ close } >
                    Create a new recipe
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
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label className="heading">Ingredients</Label>
                            <div>
                                <ul className="ingredient-list">
                                    { ingredients.map((ingredient, index) => {
                                        return <li key={index}> {ingredient.amount} {ingredient.unit} {ingredient.name}</li>
                                    }) }
                                </ul>
                            </div>
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
                                    <Button color="outline-success" onClick={ addIngredient } className="addbutton-ingredient">+</Button>
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
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label className="heading">Category</Label>
                            <Input  type="text"
                                    name='category'
                                    onChange={changeRecipe}
                                    required
                                    maxLength="255"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label className="heading">Picture URL</Label>
                            <Input  type="text"
                                    name='pictureUrl'
                                    onChange={changeRecipe}
                                    maxLength="255"
                            />
                        </FormGroup>
                        <FormGroup>
                                { validIngredient ? null : <div className="formerrormessage">Ingredient cannot be added!
                                    Please check your entries in the ingredient input fields. Possible reasons
                                    for this error can be missing required fields, only blanks in a field or wrong type
                                    in a field.</div> }
                                { validRecipe ? null : <div className="formerrormessage">Recipe cannot be created! Please
                                    check your entries in the recipe input fields. Possible reasons
                                    for this error can be missing required fields, only blanks in a field, wrong type
                                    in a field or missing ingredients in a recipe.</div> }
                        </FormGroup>
                        <FormGroup>
                            <Button className="modalButton" color="success"
                                    onClick={ create }>Create recipe</Button>
                            <Button className="modalButton" color="secondary"
                                    onClick={ close }>Close</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
};

export default RecipeCreateDialog
