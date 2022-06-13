import React, {useContext} from 'react';
import { MyContext } from '../context';
import Stage1 from './stage1';
import Stage2 from './stage2';
import { useNavigate } from 'react-router-dom'; 

const BillPaying = (props) => {

    let navigate = useNavigate();

    const context = useContext(MyContext);
    
    return (
        <div>
            <h1>Who Pays the Bill?</h1>
            {context.stage === 1 ? <Stage1 /> : <Stage2 /> }
        </div>
    );
};

export default BillPaying;