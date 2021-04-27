import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'; 

export default function Yllapito({url}) {

    const [tuoteryhmat, setTuoteryhmat] = useState([]);
    const [trname, setTrname] = useState('');
    const [tuotteet , setTuotteet] = useState([]);
    const [tname , setTname] = useState('');
    const [author , setAuthor] = useState('');
    const [price , setPrice] = useState('');
    //const [image , setImage] = useState();
    const [category_id , setCategory_id] = useState('');
    //const [ , set] = useState();

    // tuoteryhmät
    useEffect(() => {
        let status = 0;
        fetch(url + 'yllapito/showtuoteryhmat.php')
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
        fetch(url + 'yllapito/savetuoteryhma.php', {
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
        fetch(url + 'yllapito/deletetuoteryhma.php', {
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

    // tuotteet
    useEffect(() => {
        let status = 0;
        fetch(url + 'yllapito/showtuotteet.php')
        .then(res => {
            status = parseInt(res.status);
            return res.json()
        })
        .then(
            (res) => {
                if (status === 200) {
                setTuotteet(res);
                } else {
                alert(res.error);
                }
            }, (error) => {
                alert(error);
            }
        )
    }, [])

    function addTuote(t) {
        t.preventDefault();
        let status = 0;
        fetch(url + 'yllapito/savetuote.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: tname,
                author: author,
                price: price,
                //image: image,
                category_id: category_id
            })
        })
        .then(res => {
            return res.json();
        })
        .then(
            (res) => {
                if (status === 200) {
                    setTuotteet(tuotteet => [...tuotteet, res]);
                    setTname('');
                    setAuthor('');
                    setPrice('');
                    //setImage('');
                    setCategory_id('');
                } else {
                    alert(res.error);
                }
            }, (error) => {
                alert(error);
            }
        )
    }

    function deleteTuote(id) {
        let status = 0;
        fetch(url + 'yllapito/deletetuote.php', {
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
                    const newListWithoutRemoved = tuotteet.filter((tuote) => tuote.id !== id);
                    setTuotteet(newListWithoutRemoved);
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
                    <div className="marginia">
                        <input placeholder="Tuoteryhmän nimi" value={trname} onChange={tr => setTrname(tr.target.value)}/>
                    </div>
                    <div>
                        <button className="tilausnappi">Lisää uusi tuoteryhmä</button>
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
                            </tr>
                        </table>
                    ))}
                </ol>
            </div>
            <h4>Tuotteet</h4>
            <div>
                <form onSubmit={addTuote}>
                    <div className="marginia">
                        <input placeholder="Kirjan nimi" value={tname} onChange={t => setTname(t.target.value)}/>
                    </div>
                    <div className="marginia">
                        <input placeholder="Kirjailija" value={author} onChange={t => setAuthor(t.target.value)}/>
                    </div>
                    <div className="marginia">
                        <input placeholder="Hinta" value={price} onChange={t => setPrice(t.target.value)}/>
                    </div>
                    <div className="marginia">
                        {/* <input placeholder="Kuva" value={tname} onChange={t => setImage(t.target.value)}/> */}
                    </div>
                    <div className="marginia">
                        <input placeholder="Kategoria" value={category_id} onChange={t => setCategory_id(t.target.value)}/>
                    </div>
                    <div>
                        <button className="tilausnappi">Lisää uusi tuote</button>
                    </div>
                </form>
            </div>
            <div>
                <ol>
                    {tuotteet.map(tuote => (
                        <table className="table" key={tuote.id}>
                            <tr>
                                <td>{tuote.id}</td>
                                <td>{tuote.name}</td>
                                <td>{tuote.author}</td>
                                <td>{tuote.price}</td>
                                <td><img src={url + 'img/img_' + tuote.id + '.png'} className="img-fluid" width="40"/></td>
                                <td>{tuote.category_id}</td>
                                <td><a className="delete" onClick={() => deleteTuote(tuote.id)} href="#">Poista</a></td>
                            </tr>
                        </table>
                    ))}
                </ol>
            </div>
        </div>
    );
}

