import React, { useState, useContext, useRef } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';

const Stage1 = () => {
    const textInput = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = textInput.current.value;
        console.log(value);
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Player Name</Form.Label>
                    <Form.Control ref = {textInput} type="text" placeholder="Enter Player Name" />
                    <Form.Text className="text-muted">
                        You will be added to the list of players who might have to end up paying for everyone. Are you sure?
                    </Form.Text>
                </Form.Group>

                <Button
                    className='miami'
                    variant='primary'
                    type='submit'
                >
                    Add Player
                </Button>
            </Form>
        </div>
    );
};

export default Stage1;