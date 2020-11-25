import React, { useState } from 'react';
import './SignIn.css';

import { Link , useHistory } from 'react-router-dom';
import { useStateValue } from '../../auth/StateProvider';

//firebase;
import {auth} from '../../auth/firebase';
import { Button, Input } from '@material-ui/core';


export default function SignIn() {
    const [{user},dispatch]=useStateValue()
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [username,setUsername]=useState('');
    const history = useHistory();

    const handleChange=(e)=>{
        const name=e.target.name;
        const value = e.target.value;
        if (name==='email'){
            return (setEmail(value))
        }else if (name==='password'){
            return (setPassword(value))
        }else if (name==='username'){
            return (setUsername(value))
        }
    };

    const handleRegister=(e)=>{
        console.log('login request recieved!');
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((authUser) => {
            authUser.user.updateProfile({
                displayName:username
            })
               
        })
        .catch(e => alert(e.message))
        }
        
    return (
        <div className="signin">

            <div className="svg__wrapper">
                <img src="wave.svg" alt="err_wave" className="waves" />
            </div>
            <div className="svg__wrapper">
                <img src="blob1.svg" alt="err_wave" className="blob1" />
            </div>
            <div className="svg__wrapper">
                <img src="blob2.svg" alt="err_wave" className="blob2" />
            </div>
            <div className="svg__wrapper">
                <img src="blob3.svg" alt="err_wave" className="blob3" />
            </div>
            

            <div className="signin__wrapper">
                <form className="sign__inner" >
                    <div className="sign__options">
                        <div className="sign__option">
                            <label for="email">Email</label>
                            <input className="email" placeholder="Enter Email..." name="email" value = {email} />
                        </div>
                        <div className="sign__option">
                            <label for="password">Password</label>
                            <input className="password" placeholder="Enter Password..." name="password" value = {password} />
                        </div>
                        <div className="sign__option">
                            <Button className="btn__submit" name="sub" type="submit">Login</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
