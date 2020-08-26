import React from 'react'
import { BrowserRouter as Router,
    Route } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';
import ProductItem from './components/ProductItem';
import NavRoute from './components/navroute';

export default function RouteConfig() {
    return (
        <div>
            <Router>
                <NavRoute />
                <switch>
                    <Route path="/Home" component={Home}></Route>
                    <Route path="/About" component={About}></Route>
                    <Route exact path="/Product" component={Product}></Route>
                    <Route path="/Product/:id" component={ProductItem}></Route>
                    <Route path="*" component={()=><h2>404 Not Found!</h2>}/>
                </switch>
            </Router>
        </div>
    )
}
