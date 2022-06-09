import React from 'react';
import ReactDOM from "react-dom/client";
import {  BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/home';
import BillPaying from './components/billPaying';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';


const App = (props) => {
    
    return (
        <BrowserRouter>
                <header>
                    <Link to=''>Home</Link><br />
                    <Link to='/payingthebills'>Paying the Bills</Link>
                </header>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='payingthebills' element={<BillPaying />} />
                </Routes>
        </BrowserRouter>
    );
};

export default App;