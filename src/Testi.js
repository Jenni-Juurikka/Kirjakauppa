import React from 'react'
import { Redirect } from 'react-router';

export default function Testi({username, password, user}) {
    console.log(username);
    console.log(password);
    console.log(user);
    if (user===null) {
        return <Redirect to="/login" />
    }

    
    console.log('aaaa');
    return (
        <div>
           <p>user:{username}</p>
           <p>pass:{password}</p>
        </div>
    )
}
