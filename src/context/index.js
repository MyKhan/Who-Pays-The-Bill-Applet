import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const MyContext = React.createContext();

const MyProvider = (props) => {

    const [stage, setStage] = useState(1);
    const [players, setPlayers] = useState([]);
    const [result, setResult] = useState("");

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

    const nextHandler = () => {
        if (players.length < 2) {
            toast.error('Only one person? Think about it again', {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 2000
            })
        } else {
            setStage(() => {
                return 2;
            })
        }
    }

    const generateLooser = () => {
        setResult(players[Math.floor(Math.random()*players.length)]);
      };

      const resetGame = () => {
        setStage(1);
        setResult("");
        setPlayers([]);
      }

    return (
        <>
            <MyContext.Provider value = {{ stage, players, result, addPlayer: addPlayerHandler, removePlayer: removePlayerHandler, next: nextHandler, getLooser: generateLooser, reset: resetGame }}>
                {props.children}
            </MyContext.Provider>
            <ToastContainer />
        </>
    );
};

export {MyContext, MyProvider}; 