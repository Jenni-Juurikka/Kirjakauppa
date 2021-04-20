import React, { createRef } from 'react';
import Header from './header';
import Navbar from './Navbar';
import Footeri from './Footeri';
import addToCart from '../App';
import '../App.css';

export default function productCart() {
    return (
        <div className="container">
            <div className="bg-color">
                <Navbar/>
                <Header/>
                <div className="container-fluid">
                    <h3>Ostoskori</h3>
                    <div className="row">
                        {cart.map((item) => {
                            {cart}
                        })}
                    </div>
                </div>
            </div>
            <Footeri/>
        </div>
    )
}