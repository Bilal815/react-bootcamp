import React from 'react';
import Shoes from './../shoes.json';
import { Link } from 'react-router-dom';
import './Product.css';

function Product() {
    return (
        <div>
            <h1>Welcome to Product</h1>
            <div className="shoes">
                {Object.keys(Shoes).map(keyName=>{
                    const shoe = Shoes[keyName];
                    return (
                        <Link key={keyName} 
                            className="link" 
                            to={`/product/${keyName}`}>
                                <img src={shoe.img} height={150} alt="shoe" />
                                <h4>{shoe.name.toUpperCase().replace(/-/gim, " ")}</h4>
                    </Link>)
                })}
            </div>
        </div>
    );
}

export default Product;
