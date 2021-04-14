import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './styles/colors.css';
import './styles/spacing.css';


export default function Home({url, tuoteryhma, search, addToCart}) {
    const URLI = "http://localhost/kirjakauppa/img/img_";
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
        
    }, [tuoteryhma,search])

    return (
        <div>
            <h3>{tuoteryhma?.name}</h3>
            <div className="row">
                {products.map(tuote => (
                    <div className="col-6 col-md-4 col-xl-3" key={tuote.id}>
                    {/* <h5>{tuote.name}</h5> */}
                    <Link to="/src/Tuotesivu.js">{tuote.name}</Link>
                    <div className="book_img img-fluid">
                    <img src={URLI + tuote.id + ".png"} className="img-fluid"/>
                    </div>
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