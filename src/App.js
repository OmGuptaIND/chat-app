import React , {useState, useEffect} from 'react';
import './App.css';
import { useStateValue } from './auth/StateProvider';

//firebase;
import {auth} from './auth/firebase';

//React-Router-Dom;
import { Route , Switch , Redirect } from "react-router-dom";

//Components;
import Home  from './components/posts/Home';
import SignIn from './components/posts/SignIn';

function App() {

  //Hooks
  const [{user},dispatch]=useStateValue(); 
  //Login Effect
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //the user is logged in
        dispatch({
          type:"SET_USER",
          user:authUser,
        });
      }else{
        //User is logged out
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    });

    return () => {
      unsubscribe();
    }
  },[user]);
  console.log("User is >>>>> ",user);
  return (
   <div className="app">
    <Switch>
      <Route path = '/signIn' exact={true}>
        {user ? <Redirect to = '/' /> : <SignIn />}
      </Route>
      <Route path = "/" exact={true}>
        {user ? <Home /> :  <Redirect to="/signIn" /> }
      </Route>
    </Switch>
    
   </div>
  );
}
export default App;
