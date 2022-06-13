import React, { useEffect, useContext } from 'react';
import { MyContext } from '../context';

const Stage2 = () => {

  const context = useContext(MyContext);

  let startOver = <div
    className='action_button'
    onClick={() => {
      context.reset();
    }}
  >
    Start Over
  </div>;

  const newLooser = <div
    className='action_button'
    onClick={() => {
      context.getLooser();
    }}
  >
    Get New Looser
  </div>;

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

      {startOver}
      
      {context.result && newLooser}
    </>
  );
};

export default Stage2;