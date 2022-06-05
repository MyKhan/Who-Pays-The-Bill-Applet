import React, { useState } from 'react';

const MyContext = React.createContext();

const MyProvider = (props) => {

    const [stage, setStage] = useState(1);
    console.log(stage);

    return (
        <>
            <MyContext.Provider value = {{ stage }}>
                {props.children}
            </MyContext.Provider>
        </>
    );
};

export {MyContext, MyProvider}; 