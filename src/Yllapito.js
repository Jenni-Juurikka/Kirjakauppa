import React, {useState, useEffect} from 'react';

export default function Yllapito({url}) {

    const [tuoteryhmat, setTuoteryhmat] = useState([]);
    const [trname, setTrname] = useState('');
    const [tuotteet , setTuotteet] = useState([]);
    const [tname , setTname] = useState('');
    const [author , setAuthor] = useState('');
    const [price , setPrice] = useState('');
    const [image , setImage] = useState();
    const [description, setDescription] = useState('');
    const [category_id , setCategory_id] = useState('');
    const [asiakkaat, setAsiakkaat] = useState([]);
    const [tilaukset, setTilaukset] = useState([]);
    // tuoteryhmät

    // hae tuoteryhmät
    useEffect(() => {
        let status = 0;
        fetch(url + 'yllapito/showtuoteryhmat.php')
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
        );
    }, []);

    // lisää tuoteryhmä
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
        );
    }

    // poista tuoteryhmä
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
        );
    }

    // tuotteet

    // hae tuotteet
    useEffect(() => {
        let status = 0;
        fetch(url + 'yllapito/showtuotteet.php')
        .then(res => {
            status = parseInt(res.status);
            return res.json();
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
        );
    }, []);

    // lisää tuote
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
                image: image,
                description: description,
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
                    setImage('');
                    setDescription('')
                    setCategory_id('');
                } else {
                    alert(res.error);
                }
            }, (error) => {
                alert(error);
            }
        );
    }

    // poista tuote
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
        );
    }

    // asiakkaat

    // hae asiakkaat
    useEffect(() => {
        let status = 0;
        fetch(url + 'yllapito/showasiakkaat.php')
        .then(res => {
            status = parseInt(res.status);
            return res.json();
        })
        .then(
            (res) => {
                if (status === 200) {
                setAsiakkaat(res);
                } else {
                alert(res.error);
                }
            }, (error) => {
                alert(error);
            }
        );
    }, []);

    // tilaukset

    // hae tilausrivit tilauksen mukaan ryhmiteltynä
    useEffect(() => {
        let status = 0;
        fetch(url + 'yllapito/showtilaukset.php')
        .then(res => {
            status = parseInt(res.status);
            return res.json();
        })
        .then(
            (res) => {
                if (status === 200) {
                setTilaukset(res);
                } else {
                alert(res.error);
                }
            }, (error) => {
                alert(error);
            }
        );
    }, []);


    // tulosta kaikki edellä kuvatut
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
            <table className="table" >
                <tbody>
                    {tuoteryhmat.map(tuoteryhma => (
                        <tr key={tuoteryhma.id}>
                            <td>{tuoteryhma.id}</td>
                            <td>{tuoteryhma.name}</td>
                            <td><a className="delete" onClick={() => deleteTuoteryhma(tuoteryhma.id)} href="#">Poista</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
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
                        <input placeholder="Kuva" value={image} onChange={t => setImage(t.target.value)}/>
                    </div>
                    <div className="marginia">
                        <input placeholder="Kuvaus" value={description} onChange={t => setDescription(t.target.value)}/>
                    </div>
                    <div className="marginia">
                        <input placeholder="Kategoria" type="number" min="1" value={category_id} onChange={t => setCategory_id(t.target.value)}/>
                    </div>
                    <div>
                        <button className="tilausnappi">Lisää uusi tuote</button>
                    </div>
                </form>
            </div>
            <h4>Tuotteet</h4>
            <table className="table">
                <tbody>
                    {tuotteet.map(tuote => (
                            <tr key={tuote.id}>
                                <td>{tuote.id}</td>
                                <td >{tuote.name}</td>
                                <td>{tuote.author}</td>
                                <td>{tuote.price}</td>
                                <td><img src={url + 'img/img_' + tuote.id + '.png'} className="img-fluid" width="40"/></td>
                                <td>{tuote.description}</td>
                                <td>{tuote.category_id}</td>
                                <td><a className="delete" onClick={() => deleteTuote(tuote.id)} href="#">Poista</a></td>
                            </tr>
                    ))}
                </tbody>
            </table>
            <h4>Asiakkaat</h4>
            <table className="table">
                <tbody>
                    {asiakkaat.map(asiakas => (
                        <tr key={asiakas.astunnus}>
                            <td>{asiakas.astunnus}</td>
                            <td>{asiakas.asnimi}</td>
                            <td>{asiakas.puhelinro}</td>
                            <td>{asiakas.osoite}</td>
                            <td>{asiakas.postitmp}</td>
                            <td>{asiakas.postinro}</td>
                            <td>{asiakas.maa}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h4>Tilaukset</h4>
            <table className="table">
                <tbody>
                    {tilaukset.map(tilaus => (
                        <tr key={tilaus.tilausnro}>
                            <td>{tilaus.tilausnro}</td>
                            <td>{tilaus.astunnus}</td>
                            <td>{tilaus.tilauspvm}</td>
                            <td>{tilaus.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

