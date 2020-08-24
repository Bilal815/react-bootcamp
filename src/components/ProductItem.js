import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../shoes.json';

function ProductItem() {
    const { id } = useParams();
    const shoe = Shoes[id];
    console.log(id);

    if (!shoe) {
        return <h2>Product Not Found!</h2>};

    return (
        <div>
            <h1>{shoe.name.toLowerCase().replace('v', 'V').replace('b', 'B')} Description</h1>
            <div>
                <img src={shoe.img} height={500} alt="shoe" />
                <h4>{shoe.name}</h4>
            </div>
        </div>
    );
}

export default ProductItem
