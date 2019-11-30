import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Col, Input } from 'reactstrap'

const RecipeShowDialog = ({ recipe }) => {

    let [showModal, setShowModal] = useState(false);

    const close = () => setShowModal(false);

    const open = () => setShowModal(true);

    return (
        <div>
            <Button color="secondary" onClick={ open }
                    className="actionButton">Show</Button>
            <Modal isOpen={ showModal } toggle={ close } size="lg" autoFocus={false}>
                <ModalHeader toggle={ close } >
                    {recipe.name}
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Col>
                                <Input type="text" id="formTitle"
                                       defaultValue={ recipe.description }
                                       className="form-control-plaintext"
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Label>Ingredients</Label>
                            <ul>
                                { recipe.ingredients.map((ingredient) => {
                                    return <li key={ingredient.id}> {ingredient.amount} {ingredient.unit} {ingredient.name}</li>
                                }) }
                            </ul>
                        </FormGroup>

                        <FormGroup>
                            <Label>Description</Label>
                            <p>
                                { recipe.description }
                            </p>
                        </FormGroup>

                        <FormGroup>
                            <Label>Minutes to make the dish</Label>
                            <p>
                                { recipe.minutesToMake }
                            </p>
                        </FormGroup>

                        <FormGroup>
                            <Label>Category</Label>
                            <p>
                                { recipe.category }
                            </p>
                        </FormGroup>

                        <FormGroup>
                            <img className="recipe-image" src={recipe.pictureUrl} alt={recipe.name} />
                        </FormGroup>

                        <FormGroup>
                            <Col className="clearfix" style={ { padding: '.2rem' } }>
                                <Button className="float-right" color="secondary"
                                        onClick={ close }>Close</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default RecipeShowDialog
