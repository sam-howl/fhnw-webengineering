import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Col } from 'reactstrap'

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
                            <img src={recipe.pictureUrl} alt={recipe.name} />
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
