import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'; 

const YP_URL = 'http://localhost/kirjakauppa/yllapito/';
export default function Yllapito() {

    
    const [trname, setTrname] = useState('');
    const[tuoteryhmat, setTuoteryhmat] = useState([]);
    //const [ , set] = useState();

    useEffect(() => {
        let status = 0;
        fetch(YP_URL + 'showtuoteryhmat.php')
        .then(res => {
            status = parseInt(res.status);
            return res.json()
        })
        .then(
            (res) => {
                if (status === 200) {
                setTuoteryhmat(res);
                } else {
                alert(res.error);
                }
            }, (error) => {
                alert(error);
            }
        )
    }, [])

    function addTuoteryhma(tr) {
        tr.preventDefault();
        let status = 0;
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
                if (status === 200) {
                    setTuoteryhmat(tuoteryhmat => [...tuoteryhmat, res]);
                    setTrname('');
                } else {
                    alert(res.error);
                }
            }, (error) => {
                alert(error);
            }
        )
    }

    function deleteTuoteryhma(id) {
        let status = 0;
        fetch(YP_URL + 'deletetuoteryhma.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id
            })
        })
        .then(res => {
            status = parseInt(res.status);
            return res.json();
        })
        .then(
            (res) => {
                if (status === 200) {
                    const newListWithoutRemoved = tuoteryhmat.filter((tuoteryhma) => tuoteryhma.id !== id);
                    setTuoteryhmat(newListWithoutRemoved);
                  } else {
                    alert(res.error);
                  }
            }, (error) => {
                alert(error);
            }
        )
    }

    function updateTuoteryhma(id) {
        let status = 0;
        fetch(YP_URL + 'saveupdatetr.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                name: trname
            })
        })
        .then(res => {
            status = parseInt(res.status);
            return res.json();
        })
        .then(
            (res) => {
                if (status === 200) {
                    setTuoteryhmat(res);
                  } else {
                    alert(res.error);
                  }
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
                        <button>Lisää uusi tuoteryhmä</button>
                    </div>
                </form>
            </div>
            <div>
                <ol>
                    {tuoteryhmat.map(tuoteryhma => (
                        <table className="table" key={tuoteryhma.id}>
                            <tr>
                                <td>{tuoteryhma.id}</td>
                                <td>{tuoteryhma.name}</td>
                                <td><a className="delete" onClick={() => deleteTuoteryhma(tuoteryhma.id)} href="#">Poista</a></td>
                                <td><a className="update" onClick={() => updateTuoteryhma(tuoteryhma.id)} href="#">Muokkaa</a></td>
                            </tr>
                        </table>
                    ))}
                </ol>
            </div>
        </div>
    );
}

