import React, { useState, useContext, useRef, useEffect } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { MyContext } from '../context';

const Stage1 = () => {
    const context = useContext(MyContext);
    const textInput = useRef();
    const [error, setError] = useState([false, '']);

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = textInput.current.value;
        const validate = validateInput(value);
        if (validate) {
            setError([false, '']);
            context.addPlayer(value);
            textInput.current.value = '';
        }
    };

    useEffect(() => {
        console.log(context.players);
    }, [context.players]);

    const validateInput = (value) => {
        if (value === '') {
            setError([true, 'Sorry, you need to add something']);
            return false;
        }
        if (value.length <= 2) {
            setError([true, 'Sorry, you need to add at least 3 characters']);
            return false;
        }
        return true;
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Player Name</Form.Label>
                    <Form.Control ref={textInput} type="text" placeholder="Enter Player Name" />
                    <Form.Text className="text-muted">
                        You will be added to the list of players who might have to end up paying for everyone. Are you sure?
                    </Form.Text>
                </Form.Group>

                {
                    error[0] ?
                        <Alert>
                            {error[1]}
                        </Alert>
                        : null
                }

                <Button
                    className='miami'
                    variant='primary'
                    type='submit'
                >
                    Add Player
                </Button>
                {
                    context.players && context.players.length > 0 ?
                        <>
                            <hr />

                            <div>
                                <ul className='list-group'>
                                    {
                                        context.players.map((player, idx) => 
                                            (
                                                <li key={player} className="list-group-item d-flex justify-content-between align-items-center list-group-item-action">
                                                    {player}
                                                    <span
                                                        className = "badge bg-danger"
                                                        onClick={() => {
                                                            context.removePlayer(idx)
                                                        }}
                                                    >
                                                        X
                                                    </span>
                                                </li>
                                            )
                                        )
                                    }
                                </ul>
                                <div
                                    className='action_button'
                                    onClick={() => {
                                        context.next();
                                    }}
                                >
                                    Next
                                </div>
                            </div>
                        </>
                        : null
                }
            </Form>
        </div>
    );
};

export default Stage1;