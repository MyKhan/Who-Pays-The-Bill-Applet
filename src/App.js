import React, {useContext} from 'react';
import { MyContext } from './context';
import Stage1 from './components/stage1';
import Stage2 from './components/stage2';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {

    const context = useContext(MyContext);
    
    return (
        <div>
            <header>Who Pays the Bill?</header>
            {context.stage === 1 ? <Stage1 /> : <Stage2 /> }
        </div>
    );
};

export default App;