import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const SharedLayout = () => {
    return (
        <div>
            <Navbar />
            <h3>This is Ugly, but that is Intentional!</h3>
            <hr />
            <Outlet />
        </div>
    );
};

export default SharedLayout;