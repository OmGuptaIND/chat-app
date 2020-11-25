import React from 'react';
import './Home.css';

//react-router-dom;
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to='/signIn'>
                <h1>Sign In </h1>
            </Link>
        </div>
    )
}
