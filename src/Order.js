import React, { useState } from 'react';
import uuid from 'react-uuid';
import './styles/asiakastiedot.css';



export default function Order({url, cart, empty, removeFromCart}) {
    const[asnimi ,setAsnimi] = useState('');
    const[puhelinro ,setPuhelinro] = useState('');
    const[osoite ,setOsoite] = useState('');
    const[postitmp ,setPostitmp] = useState('');
    const[postinro ,setPostinro] = useState('');
    const[maa ,setMaa] = useState('');
    const[finished ,setFinished] = useState(false);


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
                cart: cart,
            })
        })
        .then (res => {
            return res.json();
        })
        .then (
            (res) => {
                console.log(res);
                empty();
                setFinished(true);
            }, (error) => {
                alert(error);
            }
        )
    }

    let sum = 0;

    // ostoskorin ja tilauslomakkeen tulostus
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
                                <tr key={uuid()}>
                                    <td>{tuote.name}</td>
                                    <td>{tuote.price} €</td>
                                    <td><a href="#" onClick={() => removeFromCart(tuote)}>Poista</a></td>
                                </tr>
                            )
                        })}
                        <tr key={uuid()}>
                            <td></td>
                            <td>{sum.toFixed(2)} €</td>
                            <td></td>
                            <td><a href="#" onClick={() => empty()}>Tyhjennä kori</a></td>
                        </tr>
                    </tbody>
                    
                </table>
                
                <p>Tuotteita yhteensä {cart.length}.</p> 
                
                {cart.length > 0 && // Lähettää lomakkeen jos ostoskorissa on tavaraa 
                <> 
                    {/* tilauslomake */}
                    <h4>Asiakastiedot</h4>
                      <form onSubmit={order}>
                        <div>
                            <div className="marginia">
                                <input placeholder="Kokonimi"value={asnimi} onChange={e => setAsnimi(e.target.value)}/>
                            </div>
                            <div className="marginia">
                                <input placeholder="Puhelinumero" value={puhelinro} onChange={e => setPuhelinro(e.target.value)}/>
                            </div>
                            <div className="marginia"> 
                                <input placeholder="Kotiosoite" value={osoite} onChange={e => setOsoite(e.target.value)}/>
                            </div>
                            <div className="marginia">
                                <input placeholder="Postinumero" value={postinro} onChange={e => setPostinro(e.target.value)}/>
                            </div>
                            <div className="marginia">
                                <input placeholder="Postitoimipaikka" value={postitmp} onChange={e => setPostitmp(e.target.value)}/>
                            </div>
                            <div className="marginia">
                                <input placeholder="Maa" value={maa} onChange={e => setMaa(e.target.value)}/>
                            </div>
                            <div className="marginia">
                                <button className="tilausnappi">Tee tilaus</button>
                            </div>
                        </div>
                    </form>
                </>}
            </div>
        )
    } else {
        return (<h3>Tilaus onnistui!</h3>);
    }

}