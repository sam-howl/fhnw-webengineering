import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Col, Input } from 'reactstrap'

const RecipeShowDialog = ({ recipe }) => {

    let [showModal, setShowModal] = useState(false);

    const close = () => setShowModal(false);

    const open = () => setShowModal(true);

    return (
        <div>
            <Button color="secondary" onClick={ open }
                    className="float-right">Show</Button>
            <Modal isOpen={ showModal } toggle={ close } size="lg" autoFocus={false}>
                <ModalHeader toggle={ close } >
                    Show Recipe
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label>Name</Label>
                            <p>
                                { recipe.name }
                            </p>
                        </FormGroup>

                        <FormGroup>
                            <Label>Ingredients</Label>
                            <p>
                                <ul>

                                { recipe.ingredients.map((ingredient) => {
                                    return (<li>
                                        {ingredient.amount} &ensp; {ingredient.unit} &ensp; {ingredient.name}
                                    </li>)
                                }) }
                                </ul>
                            </p>
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
