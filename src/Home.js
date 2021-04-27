import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import history from 'history/browser';
import './styles/colors.css';
import './styles/spacing.css';


export default function Home({url, tuoteryhma, search, addToCart, user, setProduct}) {
    const [products, setProducts] = useState([]);

    // hae kaikki tuotteet (tämä on väärässä kohdassa/pitäisi olla joku true/false juttu?)
    // if (tuoteryhma === null) {
    //    let address = url + 'products/getallproducts.php/';

    // hae valitun tuoteryhmän tuotteet
    useEffect(() => {
        async function getProducts() {
            if (tuoteryhma !== null /*|| search !== ''*/) {
                let address = '';
    
                if (tuoteryhma !== null) {
                    address = url + 'products/getproducts.php/' + tuoteryhma?.id;
                } /*else if (search !== null) {
                    address = url + 'products/search.php/' + searchphrase;
                }*/ 
    
                try {
                    const response = await fetch(address);
                    const json = await response.json();
                    if (response.ok) {
                        setProducts(json);
                        setProduct(json[0]); 
                    } else {
                        alert(json.error);
                    }
                } catch (error) {
                    alert(error);
                }
            }
        }
        getProducts();
        
    }, [tuoteryhma,search, setProduct])

    function handleClick(tuote) {
        setProduct(tuote);
        history.push("/tuotesivu/" + tuote.id); // url vaihtuu, mutta tuotesivu ei aukea
    }

    return (
        <div>
            <h3>{tuoteryhma?.name}</h3>
            <div className="row">
                {products.map(tuote => (
                    <div className="col-6 col-md-4 col-lg-3" key={tuote.id} onClick={() => handleClick(tuote)}>
                        
                            <div className="book">
                                <h6>{tuote.name}</h6></div>
                            <div className="book_img img-fluid">
                                <img src={url + 'img/img_' + tuote.id + '.png'} className="img-fluid"/>
                            </div>
                            <p className="book_author">{tuote.author}</p>
                            <p>{tuote.price + "€"}</p>
                        
                        <button className=" btn btn-primary" type="button" onClick={e => addToCart(tuote)}>
                            Lisää ostoskoriin
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )

}

