import React,{useState,useEffect} from 'react';


export default function Home({url, tuoteryhma, search, addToCart}) {
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
            <h3>Tuotteet ryhmästä {tuoteryhma?.name}</h3>
            {products.map(tuote => (
                <div key={tuote.id}>
                    <p>{tuote.name}</p>
                    <button className="btn btn-primary" type="button" onClick={e => addToCart(tuote)}>Lisää ostoskoriin</button>
                </div>
            ))}
        </div>
    )

}