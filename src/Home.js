import React,{useState,useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import history from 'history/browser';
import './styles/colors.css';
import './styles/spacing.css';


export default function Home({url, tuoteryhma, search, addToCart, user, setProduct}) {
    const [products, setProducts] = useState([]);
    const [showProduct, setShowProduct] = useState(false);

    // hae tuotteet (kaikki/tuoteryhmästä x/hakusanalla y)
    useEffect(() => {
        async function getProducts() {
            
                let address = '';
    
                if (tuoteryhma !== null) {
                    address = url + 'products/getproducts.php/' + tuoteryhma?.id;
                } else if (tuoteryhma === null /*&& search === null*/) {
                    address = url + 'products/getallproducts.php/';
                } /*else if (search !== null) {
                    address = url + 'products/search.php/' + searchphrase;
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
        getProducts();
        
    }, [tuoteryhma,search, setProduct]);

    // valitse tuotesivulla näytettävä tuote
    function handleClick(tuote) {
        setProduct(tuote);
        setShowProduct(true);
    }

    // mene tuotesivulle jos tuote valittuna
    if (showProduct === true) {
        return <Redirect to="/tuotesivu" />
    }

    // tulostaa tuotteet
    return (
        <div>
            <h3>{tuoteryhma?.name}</h3>
            <div className="row">
                {products.map(tuote => (
                    <div className="col-6 col-md-4 col-lg-3" key={tuote.id}  onClick={() => handleClick(tuote)}>
                        <div className="book linkki pointer">
                            <h6>{tuote.name}</h6>
                        </div>
                        <div className="book_img img-fluid pointer">
                            <img src={url + 'img/img_' + tuote.id + '.png'} className="img-fluid"/>
                        </div>
                        <p className="book_author">{tuote.author}</p>
                        <p>{tuote.price + "€"}</p>
                        <button className=" btn btn-primary" type="button" onClick={() => addToCart(tuote)}>
                            Lisää ostoskoriin
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )

}

