import React, {useState, handleChange, Component, } from 'react';
import { useHistory } from 'react-router-dom';
import './styles/asiakastiedot.css';

const URL = 'http://localhost/kirjakauppa/login.php';
// TEE NIMELLE JOTAIN JOSSAIN KOHTAAN EN NYT JAKSA //
const url2 = 'http://localhost/kirjakauppa/'

export default function Login() {
 const [username, setUsername] = useState('jmankisenmaa');
 const [password, setPassword] = useState('auto123');
 const [astunnus, setAstunnus] = useState('')
 const [asnimi, setAsnimi] = useState('');
 const [salasana, setSalasana] = useState('');
 const [puhelinro, setPuhelinro] = useState('');
 const [osoite, setOsoite] = useState('');
 const [postitmp, setPostitmp] = useState('');
 const [postinro, setPostinro] = useState('');
 const [maa, setMaa] = useState('');
 const [asvuosi, setAsvuosi] = useState('');
 const [setFinished] = useState(false);

 let history = useHistory();

 async function login(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append('username',username);
    formData.append('salasana',password);

    const config = {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept' : 'application/json',
        },
        body: formData
      }
    const response = await fetch(URL,config);
    const json = await response.json();

    if (response.ok) {
      alert('Kirjautuminen onnistui!');
      history.push('/');
    } else {
      if (response.status === 401) {
        alert('Virhe kirjautumisessa.');
      }
    }
 }

 function registeri(e) {
  e.preventDefault();
  fetch(url2 + 'register/registerAdd.php', {
      method: 'POST',
      header: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          username: astunnus,
          asnimi: asnimi,
          salasana: salasana,
          puhelinro: puhelinro,
          osoite: osoite,
          postitmp: postitmp,
          postinro: postinro,
          maa: maa,
          asvuosi: asvuosi,
        })
    })
    .then (res => {
        return res.json();
    })
    .then (
        (res) => {
            console.log(res);
            setFinished(true);
        }, (error) => {
            alert(error);
        }
      )
    }

    
    function refresh() {
      window.location.reload(false);
    }

    return (
      <div className="container"> 
          <form onSubmit={login}>
            <div className="col-sm-6">
              <h3>Kirjaudu sisään</h3>
                <div>
                  <label>Käyttäjätunnus: </label>
                  <input value={username} type="text" className="form-control col-12" aria-label="Default"
                    aria-describedby="inputGroup-sizing-default" placeholder="käyttäjä" 
                    onChange={e => setUsername(e.target.value)}/>
              </div>
              <div>
                  <label>Salasana: </label>
                  <input value={password} type="password" className="form-control col-12" aria-label="Default"
                    aria-describedby="inputGroup-sizing-default" placeholder="salasana"
                    onChange={e => setPassword(e.target.value)}/>
              </div>
              <div>
                  <button className="tilausnappi">Kirjaudu sisään</button>
              </div>
            </div>
          </form>


          <form onSubmit={registeri}>
            <div className="col-sm-6">
                <h3>Luo asiakastili</h3>
                <div className="marginia">
                    <input type="text" className="form-control col-12" aria-label="Default"
                    aria-describedby="inputGroup-sizing-default" placeholder="Käyttäjätunnus"
                    onChange={e => setAstunnus(e.target.value)}/>
                </div>
                <div className="marginia">
                    <input type="text" className="form-control col-12" aria-label="Default"
                    aria-describedby="inputGroup-sizing-default" placeholder="Koko nimi"
                    onChange={e => setAsnimi(e.target.value)}/>
                </div>
                <div className="marginia"> 
                    <input type="password" className="form-control col-12" aria-label="Default"
                    aria-describedby="inputGroup-sizing-default" placeholder="Salasana" 
                    onChange={e => setSalasana(e.target.value)}/>
                </div>
                <div className="marginia">
                    <input type="text" className="form-control col-12" aria-label="Default"
                    aria-describedby="inputGroup-sizing-default" placeholder="Puhelinnumero" 
                    onChange={e => setPuhelinro(e.target.value)}/>
                </div>
                <div className="marginia">
                    <input type="text" className="form-control col-12" aria-label="Default"
                    aria-describedby="inputGroup-sizing-default" placeholder="Lähiosoite" 
                    onChange={e => setOsoite(e.target.value)}/>
                </div>
                <div className="marginia">
                    <input type="text" className="form-control col-12" aria-label="Default"
                    aria-describedby="inputGroup-sizing-default" placeholder="Postitoimipaikka" 
                    onChange={e => setPostitmp(e.target.value)}/>
                </div>
                <div className="marginia">
                    <input type="text" className="form-control col-12" aria-label="Default"
                    aria-describedby="inputGroup-sizing-default" placeholder="Postinumero" 
                    onChange={e => setPostinro(e.target.value)}/>
                </div>
                <div className="marginia">
                    <input type="text" className="form-control col-12" aria-label="Default"
                    aria-describedby="inputGroup-sizing-default" placeholder="Maa" 
                    onChange={e => setMaa(e.target.value)}/>
                </div>
                <div className="marginia">
                    <button onClick={refresh} className="tilausnappi">Luo Käyttäjätunnus</button>
                </div>
            </div>
        </form>
      </div>
    );   
}

