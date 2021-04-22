import React,{useState} from 'react';

export default function Register() {
    const [asnimi, setAsnimi] = useState('');
    const [salasana, setSalasana] = useState('');
    const [puhelinro, setPuhelinro] = useState('');
    const [osoite, setOsoite] = useState('');
    const [postitmp, setPostitmp] = useState('');
    const [postinro, setPostinro] = useState('');
    const [maa, setMaa] = useState('');
    const [asvuosi, setAsvuosi] = useState('');


    const [finished, setFinished] = useState(false);
    const url = 'http://localhost/kirjakauppa/';

    function registeri(e) {
      e.preventDefault();
      fetch(url + 'register/registerAdd.php', {
          method: 'POST',
          header: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
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

    

    return (
        <div>
          <form onSubmit={registeri}>
            <div>
                <div className="marginia">
                    <input placeholder="Puhelinumero" onChange={e => setAsnimi(e.target.value)}/>
                </div>
                <div className="marginia"> 
                    <input placeholder="Kotiosoite" onChange={e => setSalasana(e.target.value)}/>
                </div>
                <div className="marginia">
                    <input placeholder="Postinumero" onChange={e => setPuhelinro(e.target.value)}/>
                </div>
                <div className="marginia">
                    <input placeholder="Postitoimipaikka" onChange={e => setOsoite(e.target.value)}/>
                </div>
                <div className="marginia">
                    <input placeholder="Maa" onChange={e => setPostitmp(e.target.value)}/>
                </div>
                <div className="marginia">
                    <input placeholder="Maa" onChange={e => setPostinro(e.target.value)}/>
                </div>
                <div className="marginia">
                    <input placeholder="Maa" onChange={e => setMaa(e.target.value)}/>
                </div>
                <div className="marginia">
                    <input placeholder="Maa" onChange={e => setAsvuosi(e.target.value)}/>
                </div>
                <div className="marginia">
                    <button className="tilausnappi">Luo Käyttäjätunnus</button>
                </div>
            </div>
        </form>
    </div>
   )
}
