import React from 'react';
import Header from './header';
import Navbar from './Navbar';
import Footeri from './Footeri';
import addToCart from '../App';
import '../App.css';

export default function productCart(props) {
    return (
        <div className="container">
            <div className="bg-color">
                <Navbar/>
                <Header/>
                <div className="container-fluid">
                    <h3>Ostoskori</h3>
                    <div className="row">
                        {addToCart(props).length === 0 && <div>Kori on tyhjä</div>}
                    </div>
                    <div className="row">
                        {addToCart(props)}
                    </div>
                </div>
            </div>
            <Footeri/>
        </div>
    )
}