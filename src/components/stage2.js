import React, { useEffect, useContext } from 'react';
import { MyContext } from '../context';

const Stage2 = () => {

    const context = useContext(MyContext);

    useEffect(() => {
        const timer = setTimeout(() => {
          context.getLooser()
        }, 2000);
        return () => clearTimeout(timer);
      }, [context.stage]);

    return (
        <>
          <div className='result_wrapper'>
            <h4>The Looser issss.... (Drum Roll)</h4>
            {context.result}
          </div>

          <div
            className='action_button'
            onClick={() => {
              context.reset();
            }}  
          >
            Start Over
          </div>
          <div
            className='action_button'
            onClick={() => {
              context.getLooser();
            }}  
          >
            Get New Looser
          </div>
        </>
    );
};

export default Stage2;