import React,{useState,useEffect} from 'react';


export default function Home({url,tuoteryhma}) {
    const [products, setProducts] = useState([]);

    useEffect(async() => {
        try {
            const response = await fetch(url + 'products/getproducts.php' + tuoteryhma?.trnro);
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
            <h3>Tuotteet ryhmästä {tuoteryhma?.trnimi}</h3>
            {products.map(tuote => (
                <div key={tuote.tuotenro}>
                    <p>{tuote.tuotenimi}</p>
                </div>
            ))}
        </div>
    )

}