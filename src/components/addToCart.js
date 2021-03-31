import React from 'react';
import {Link} from 'react-router-dom';

export default function Cart({cart}) {
    return (
        <Link id="cart" to="order">
            <svg xmlns="" width="" heigth="">
                <path d=""></path>
            </svg>
            <span style={{color: 'white'}}>{cart.length}</span>
        </Link>
    )
}