import React, { createRef } from 'react';
import Header from './header';
import Navbar from './Navbar';
import Footeri from './Footeri';
import addToCart from '../App';
import '../App.css';
import Cart from './Cart';
import uuid from 'react-uuid';

export default function productCart() {
    function changeAmount(e, tuote, index) {
        updateAmount(e.target.value, tuote);
        setInputIndex(index);
    }

    useEffect(() => {
        for (let i = 0;i<cart.length;i++) {
            inputs[i] = createRef();
        }
    }, [cart.length])

    return (
        <div className="container">
            <div className="bg-color">
                <Navbar/>
                <Header/>
                <div className="container-fluid">
                    <h3>Ostoskori</h3>
                    <div className="row">
                        {cart.map((tuote,index) => {
                            sum+=parseFloat(tuote.price);
                            return (
                                <tr key={uuid()}>
                                    <td>{tuote.name}</td>
                                    <td>{tuote.price}</td>

                                    <td><input
                                        ref={inputs[index]}
                                        style={{width: "60px"}}
                                        type="number" step="1" min="1"
                                        onChange={e => changeAmount(e,tuote,index)}
                                        value={tuote.amount}/>
                                    </td>
                                    <td><a href="#" onClick={() => removeFromCart(tuote)}>Delete</a></td>
                                </tr>
                            ) 
                        })}
                        <tr key={uuid()}>
                            <td className="sumrow"></td>
                            <td className="sumrow">{sum.toFixed(2)} €</td>
                            <td className="sumrow"></td>
                            <td className="sumrow"><a href="#" onClick={e => empty()}>Empty</a></td>
                        </tr>
                    </div>
                </div>
            </div>
            <Footeri/>
        </div>
    )
}