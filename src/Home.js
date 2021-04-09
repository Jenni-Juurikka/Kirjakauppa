import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import './styles/colors.css';
import Tuotesivu from './Tuotesivu';


export default function Home({url, tuoteryhma,/* search,*/ addToCart}) {
    const [products, setProducts] = useState([]);

    useEffect(async() => {
        if (tuoteryhma !== null /*|| search !== ''*/) {
            let address = '';

            if (tuoteryhma !== null) {
                address = url + 'products/getproducts.php/' + tuoteryhma?.id;
            } /*else if (search !== null) {
                address = url + 'products/search.php/' + search;
            }*/


            try {
                const response = await fetch(address);
                const json = await response.json();
                if (response.ok) {
                    setProducts(json);
                } else {
                    alert(json.error);
                }
            } catch (error) {
                alert(error);
            }
        }
        
    }, [tuoteryhma /*,search*/])

    return (
        <div>
            <h3>{tuoteryhma?.name}</h3>
            <div className="row">
                {products.map(tuote => (
                    <div className="col-6 col-md-4 col-lg-3 col-xl-2" key={tuote.id}>
                        <img src={tuote.image} />
                        <h5>{tuote.name}</h5>
                        {/* <Link to="/src/Tuotesivu.js" >{tuote.name}</Link> */}
                        {/* <Route path="/" render={() => <Tuotesivu
                            url={URL}
                            tuoteid={tuote.id}
                            addToCart={addToCart}/>}
                            exact
                        />  */}
                        {/* tämä route yrittää mennä tuotesivulle mut ei toimi tällaisenaan,
                        linkki yritti samaa mut ei funktio sit tulosta mitään */}
                        <p>{tuote.author}</p>
                        <p>{tuote.price}</p>
                        <button className="btn btn-primary" type="button" onClick={e => addToCart(tuote)}>
                            Lisää ostoskoriin
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )

}