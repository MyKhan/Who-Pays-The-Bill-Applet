import React, { useState } from 'react';

const MyContext = React.createContext();

const MyProvider = (props) => {

    const {stage, setStage} = useState(1);

    return (
        <>
            <MyContext.Provider value = {{ stage }}>
                {props.children}
            </MyContext.Provider>
        </>
    );
};

export {MyContext, MyProvider}; 