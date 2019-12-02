import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap'

const RecipeCreateDialog = ({createRecipe}) => {

    let [showModal, setShowModal] = useState(false);
    let [recipe, setRecipe] = useState({});
    let [ingredient, setIngredient] = useState({});
    let [ingredients, setIngredients] = useState([]);

    const close = () => {
        setShowModal(false);
        setIngredients([])
    };

    const open = () => setShowModal(true);

    const changeRecipe = event =>
        setRecipe({ ...recipe, [event.target.name]: event.target.value });

    const changeIngredient = event =>
        setIngredient({ ...ingredient, [event.target.name]: event.target.value });

    const addIngredient = () => {
        if (ingredient.amount && ingredient.amount.match("^[0-9]+([.,][0-9]+)?$") && ingredient.name){
            setIngredients([...ingredients, ingredient]);
            document.getElementById("amount").value = "";
            document.getElementById("unit").value = "";
            document.getElementById("ingredientname").value = "";
            setIngredient({})
        } else {
            console.error("not added")
        }
    };

    const create = () => {
        if (recipe.name && recipe.description && recipe.category && recipe.minutesToMake && recipe.minutesToMake.match("^[0-9]*$") && ingredients.length > 0){
            createRecipe(recipe, ingredients);
            close()
        } else {
            console.error("not added")
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
                                    onChange={changeRecipe}
                                    required
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
                            <Label className="heading">Expenditure of time</Label>
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
