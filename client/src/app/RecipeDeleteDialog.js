import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Col } from 'reactstrap'

const RecipeShowDialog = ({deleteRecipe, recipeId}) => {

    let [showModal, setShowModal] = useState(false);

    const close = () => setShowModal(false);

    const open = () => setShowModal(true);

    return (
        <div>
            <Button color="danger" onClick={ open }
                    className="float-right">Delete</Button>
            <Modal isOpen={ showModal } toggle={ close } size="lg" autoFocus={false}>
                <ModalHeader toggle={ close } >
                    Delete Recipe
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label>Warning!</Label>
                            <p>
                                Do you really want to delete the recipe?
                            </p>
                        </FormGroup>

                        <FormGroup>
                            <Col className="clearfix" style={ { padding: '.2rem' } }>
                                <Button className="float-right" color="danger"
                                        onClick={ () => deleteRecipe(recipeId) }>Delete</Button>
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
