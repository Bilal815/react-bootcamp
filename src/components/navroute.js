import React from 'react';
import { Link } from 'react-router-dom';

function NavRoute() {
    return (
        <div>
            <nav>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/product">Product</Link>
            </nav>
        </div>
    )
}

export default NavRoute
