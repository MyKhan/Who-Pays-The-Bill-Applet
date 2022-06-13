import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>You are home</h1>
            <Link to='billPaying'>Who Pays the Bill?</Link>
        </div>
    );
};

export default Home;