import React from 'react';
import { Redirect } from 'react-router';

export default function Tietoja({user}) {
    if (user===null) {
        return <Redirect to="/login" />
    }
    return (
        <div>Tietoja kirjakaupasta</div>
    )

}


