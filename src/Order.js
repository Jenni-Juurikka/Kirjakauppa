import React, { useEffect, useState, useRef, createRef } from 'react';



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

    useEffect(() => {
        if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex.current] !== null) {
        inputs[inputIndex].current.focus();
        }
    }, [cart])

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

    function changeAmount(e, tuote, id) {
        updateAmount(e.target.value, tuote);
        setInputIndex(id);
    }

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
                                    <td>{tuote.name}</td>
                                    <td>{tuote.price}</td>
                                    <td><input
                                        ref={inputs[id]}
                                        type="number" step="1" min="1"
                                        onChange={e => changeAmount(e, tuote, id)}
                                        value={tuote.amount}
                                        /></td>
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
    
    
                {/* tilauslomake */}
                <h4>Tee tilaus</h4>
                <div>
                    <form>
                        <label>Nimi</label>
                        <input type="text" id="asnimi"/>
                        <label>Puhelinnumero</label>
                        <input type="text" id="puhelinro"/>
                        <label>Osoite</label>
                        <input type="text" id="osoite"/>
                        <label>Postitoimipaikka</label>
                        <input type="text" id="postitmp"/>
                        <label>Postinumero</label>
                        <input type="text" id="postinro"/>
                        <label>Maa</label>
                        <input type="text" id="maa"/>
                    </form>
                </div>
            </div>
        )
    }

    
}