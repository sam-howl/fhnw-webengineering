import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Col, Input } from 'reactstrap'

const RecipeShowDialog = ({ recipe }) => {

    let [showModal, setShowModal] = useState(false);

    const close = () => setShowModal(false);

    const open = () => setShowModal(true);

    return (
        <div>
            <Button color="success" onClick={ open }
                    className="actionButton">Show</Button>
            <Modal isOpen={ showModal } toggle={ close } size="lg" autoFocus={false}>
                <ModalHeader toggle={ close } >
                    {recipe.name}
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label className="heading">Ingredients</Label>
                            <div>
                                <ul className="ingredient-list">
                                    { recipe.ingredients.map((ingredient) => {
                                        return <li key={ingredient.id}> {ingredient.amount} {ingredient.unit} {ingredient.name}</li>
                                    }) }
                                </ul>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label className="heading">Description</Label>
                            <div>
                                {recipe.description}
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label className="heading">Expenditure of time</Label>
                            <Input  readOnly
                                    defaultValue={ recipe.minutesToMake + " minutes" }
                                    plaintext
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label className="heading">Category</Label>
                            <Input  readOnly
                                    defaultValue={ recipe.category }
                                    plaintext
                            />
                        </FormGroup>
                        <FormGroup>
                            <img className="recipe-image" src={recipe.pictureUrl} alt={recipe.name} />
                        </FormGroup>
                        <FormGroup>
                            <Button className="modalButton" color="secondary"
                                    onClick={ close }>Close</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
};

export default RecipeShowDialog
