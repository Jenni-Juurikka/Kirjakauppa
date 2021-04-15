import React, { useEffect, useState, useRef, createRef } from 'react';
import {Link} from 'react-router-dom';



export default function Order({url, cart, empty, removeFromCart, updateAmount}) {
    const[asnimi ,setAsnimi] = useState('');
    const[puhelinro ,setPuhelinro] = useState('');
    const[osoite ,setOsoite] = useState('');
    const[postitmp ,setPostitmp] = useState('');
    const[postinro ,setPostinro] = useState('');
    const[maa ,setMaa] = useState('');
    const[finished ,setFinished] = useState(false);
    const[inputs ,setInputs] = useState([]);
    const[inputIndex ,setInputIndex] = useState(-1);

    // useEffect(() => {
    //     if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex.current] !== null) {
    //     inputs[inputIndex].current.focus();
    //     }
    // }, [cart])

    useEffect(() => {
        for (let i = 0; i<cart.length; i++) {
            inputs[i] = createRef();
        }
    }, [cart.length])

    // tilauslomakkeen lähetys backendiin
    function order(e) {
        e.preventDefault();
        fetch(url + 'order/add.php', {
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                asnimi: asnimi,
                puhelinro: puhelinro,
                osoite: osoite,
                postitmp: postitmp,
                postinro: postinro,
                maa: maa,
            })
        })
        .then (res => {
            return res.json();
        })
        .then (
            (res) => {
                empty();
                setFinished(true);
            }, (error) => {
                alert(error);
            }
        )
    }

    // vaihda kplmäärää
    // function changeAmount(e, tuote, id) {
    //     updateAmount(e.target.value, tuote);
    //     setInputIndex(id);
    // }

    let sum = 0;

    if (finished === false) {
        return (
            <div className="container-fluid">
                <h4>Ostoskori</h4>
                {/* korin sisältö */}
                <table className="table" >
                    <tbody>
                        {cart.map((tuote, id) => {
                            sum+=parseFloat(tuote.price);
                            return (
                                <tr >
                                    <td><Link id="tuote" to="/tuotesivu" >{tuote.name}</Link></td>
                                    <td>{tuote.price} €</td>
                                    {/* <td><input
                                        ref={inputs[id]}
                                        type="number" step="1" min="1"
                                        onChange={e => changeAmount(e, tuote, id)}
                                        value={tuote.amount}
                                        /></td> */}
                                    <td><a href="#" onClick={() => removeFromCart(tuote)}>Poista</a></td>
                                </tr>
                            )
                        })}
                        <tr >
                            <td></td>
                            <td>{sum.toFixed(2)}</td>
                            <td></td>
                            <td><a href="#" onClick={e => empty()}>Tyhjennä kori</a></td>
                        </tr>
                    </tbody>
                    
                </table>
                
                <p>Tuotteita yhteensä {cart.length}.</p> 
                
                {cart.length > 0 && // Lähettää lomakkeen jos ostoskorissa on tavaraa 
                <> 
                    {/* tilauslomake */}
                    <h4>Asiakastiedot</h4>
                    <div>
                        {/* <form onSubmit={order}>
                            <label>Nimi</label>
                            <input value={asnimi} onChange={e => setAsnimi(e.target.value)}/>
                            <label>Puhelinnumero</label>
                            <input value={puhelinro} onChange={e = setPuhelinro(e.target.value)}/>
                            <label>Osoite</label>
                            <input value={osoite} onChange={e => setOsoite(e.target.value)}/>
                            <label>Postitoimipaikka</label>
                            <input value={postitmp} onChange={e => setPostitmp(e.target.value)}/>
                            <label>Postinumero</label>
                            <input value={postinro} onChange={e => setPostinro(e.target.value)}/>
                            <label>Maa</label>
                            <input value={maa} onChange={e => setMaa(e.target.value)}/>
                            <button >Tee tilaus</button>
                        </form> */}
                    </div>
                </>}
            </div>
        )
    }

    
}