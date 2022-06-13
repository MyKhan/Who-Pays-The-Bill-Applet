import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='billPaying'>Paying the Bill</Link>
        </nav>
    );
};

export default Navbar;