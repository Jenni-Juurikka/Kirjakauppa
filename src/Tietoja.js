import React from 'react';
import { Redirect } from 'react-router';

export default function Tietoja({user}) {
    if (user===null) {
        return <Redirect to="/login" />
    }
    return (
        <div>
            <h3>Kirjakauppa</h3>
            <p>Olemme pieni perheyritys, jonka liiketilat sijaitsevat Oulun keskustassa.</p>
            <p>Arvojamme ovat ystävällinen ja asiantunteva palvelu. 
                Toivottavasti löydät valikoimastamme sinulle sopivaa luettavaa!</p>
            <p>Verkkokauppamme kautta palvelemme asiakkaita ympäri Suomen. 
                Toimitamme paketit mahdollisimman nopeasti.</p>
        </div>
    )

}


