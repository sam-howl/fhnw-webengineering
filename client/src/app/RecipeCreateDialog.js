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
        setIngredients([...ingredients, ingredient]);
        document.getElementById("amount").value = "";
        document.getElementById("unit").value = "";
        document.getElementById("ingredientname").value = "";
        setIngredient({})
    };

    const create = () => {
        createRecipe(recipe, ingredients);
        close()
    };

    return (
        <div>
            <Button color="success" onClick={ open }
                    className="actionButton">Create</Button>
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
                                    />
                                </Col>
                                <Label>Unit</Label>
                                <Col>
                                    <Input  type="text"
                                            name='unit'
                                            id='unit'
                                            onChange={changeIngredient}
                                    />
                                </Col>
                                <Label>Ingredient name</Label>
                                <Col>
                                    <Input  type="text"
                                            name='name'
                                            id='ingredientname'
                                            onChange={changeIngredient}
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
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label className="heading">Expenditure of time</Label>
                            <Input  type="text"
                                    name='minutesToMake'
                                    onChange={changeRecipe}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label className="heading">Category</Label>
                            <Input  type="text"
                                    name='category'
                                    onChange={changeRecipe}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label className="heading">Picture URL</Label>
                            <Input  type="text"
                                    name='pictureUrl'
                                    onChange={changeRecipe}
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
