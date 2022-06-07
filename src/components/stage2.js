import React, { useEffect, useContext } from 'react';
import { MyContext } from '../context';

const Stage2 = () => {

    const context = useContext(MyContext);

    useEffect(() => {
        const timer = setTimeout(() => {
          console.log('This will run after 1 second!')
        }, 2000);
        return () => clearTimeout(timer);
      }, [context.stage]);

    return (
        <div>
            Stage 2
        </div>
    );
};

export default Stage2;