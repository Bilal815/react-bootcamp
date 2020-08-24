import React from 'react';
import { Link } from 'react-router-dom';

function NavRoute() {
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/product">Product</Link>
        </div>
    )
}

export default NavRoute
