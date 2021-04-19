import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'; 

const YP_URL = 'http://localhost/kirjakauppa/yllapito/';
export default function Yllapito() {

    
    const [trname, setTrname] = useState('');
    //const [ , set] = useState();

    function addTuoteryhma(tr) {
        tr.preventDefault();
        fetch(YP_URL + 'savetuoteryhma.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: trname
            })
        })
        .then(res => {
            return res.json();
        })
        .then(
            (res) => {
                
            }, (error) => {
                alert(error);
            }
        )
    }

    return (
        <div>
            <h4>Tuoteryhmät</h4>
            <div>
            <form onSubmit={addTuoteryhma}>
                    <div>
                        <label>Tuoteryhmän nimi</label>
                        <input value={trname} onChange={tr => setTrname(tr.target.value)}/>
                    </div>
                    <div>
                        <button>Lisää uusi tuoteryhmä</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

