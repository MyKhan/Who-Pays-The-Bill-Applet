import React, { useState } from 'react';

const MyContext = React.createContext();

const MyProvider = (props) => {

    const [stage, setStage] = useState(1);
    const [players, setPlayers] = useState([]);

    const addPlayerHandler = (name) => {
        setPlayers( (prevState) => {
            return [...prevState, name];
        } )
    }

    const removePlayerHandler = (idx) => {
        let newPlayersList = players;
        newPlayersList.splice(idx, 1);
        setPlayers(() => {
            return [...newPlayersList];
            }
        );
    }

    return (
        <>
            <MyContext.Provider value = {{ stage, players, addPlayer: addPlayerHandler, removePlayer: removePlayerHandler }}>
                {props.children}
            </MyContext.Provider>
        </>
    );
};

export {MyContext, MyProvider}; 