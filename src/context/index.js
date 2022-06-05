import React, { useState } from 'react';

const MyContext = React.createContext();

const MyProvider = (props) => {

    const [stage, setStage] = useState(1);
    const [players, setPlayers] = useState([]);

    const addPlayers = (name) => {
        setPlayers( (prevState) => {
            return [...prevState, name];
        } )
    }

    return (
        <>
            <MyContext.Provider value = {{ stage, players, addPlayers }}>
                {props.children}
            </MyContext.Provider>
        </>
    );
};

export {MyContext, MyProvider}; 