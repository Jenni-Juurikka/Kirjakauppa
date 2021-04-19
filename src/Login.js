import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const URL = 'http://localhost/kirjakauppa/login.php';

export default function Login() {
 const [username, setUsername] = useState(null);
 const [password, setPassword] = useState(null);

 let history = useHistory();

 async function login(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append('astunnus',username);
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
      history.push('/home');
    } else {
      if (response.status === 401) {
        alert('Virhe kirjautumisessa.');
      }
    }
 }
    return (
        <div>
          <h3>Kirjautuminen</h3>
          <form onSubmit={login}>
              <h3>My login form</h3>
              <div>
                  <label>Käyttäjätunnus</label>
                  <input value={username} onChange={e => setUsername(e.target.value)}/>
              </div>
              <div>
                  <label>Password</label>
                  <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
              </div>
              <div>
                  <button>Kirjaudu sisään</button>
              </div>
          </form>
        </div>
    )
}
