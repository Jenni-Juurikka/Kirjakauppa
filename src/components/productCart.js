import React from 'react';
import Header from './header';
import Navbaruusi from './Navbaruusi';
import Footeri from './Footeri';
import '../App.css';

export default function productCart(props) {
    const {cart} = props;
    return (
        <div className="container">
            <div className="bg-color">
                <Navbaruusi/>
                <Header/>
                <div className="container-fluid">
                    <h3>Tuotteet</h3>
                    <div className="row">
                        {cart.length === 0 && <div>Kori on tyhjä</div>}
                    </div>
                    
                </div>
            </div>
            <Footeri/>
        </div>
    )
}