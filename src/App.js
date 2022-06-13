import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/home';
import BillPaying from './components/billPaying';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import SharedLayout from './components/SharedLayout';


const App = (props) => {
    
    return (
            <div class="container">
                <Routes>
                    <Route path='/' element={<SharedLayout />}>
                        <Route index element={<Home />} />
                        <Route path='billPaying' element={<BillPaying />} />
                    </Route>
                </Routes>
            </div>
    );
};

export default App;