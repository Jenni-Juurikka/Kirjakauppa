import React,{useState,useEffect} from 'react';


export default function Home({url, tuoteryhma, addToCart}) {
    const [products, setProducts] = useState([]);

    useEffect(async() => {
        if (tuoteryhma !== null /*|| search !== ''*/) {
            let address = '';
        }
        try {
            const response = await fetch(url + 'products/getproducts.php' + tuoteryhma?.id);
            const json = await response.json();
            if (response.ok) {
                setProducts(json);
            } else {
                alert(json.error);
            }
        } catch (error) {
            alert(error);
        }
    }, [tuoteryhma])

    return (
        <div>
            <h3>Tuotteet ryhmästä {tuoteryhma?.id}</h3>
            {products.map(tuote => (
                <div key={tuote.id}>
                    <p>{tuote.name}</p>
                    <button className="btn btn-primary" type="button" onClick={e => addToCart(tuote)}>Lisää ostoskoriin</button>
                </div>
            ))}
        </div>
    )

}