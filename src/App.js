import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from './firebase'
import {useStateValue} from './StateProvider'

function App() {

  const [{}, dispatch] = useStateValue(); // this is the state variable that we are using to get the user
  // useEffect is a hook that allows us to run a piece of code based on a specific condition
  useEffect(() => {

    // it always listens to the auth state, if the user is logged in, it will redirect to the home page and if not, it will redirect to the login page
    auth.onAuthStateChanged(authUser => {
      console.log('The user is', authUser);

      if (authUser) {
        // redirect to the home page
        dispatch({ // dispatch is a method that allows us to dispatch an action
          type: 'SET_USER', 
          user: authUser // the user is the authUser
        })
      } else {
        // redirect to the login page
        dispatch({
          type: 'SET_USER',
          user: null 
        })
      }

    })
  }, []) // empty parentheses means that the code will run only once

  return (
    <Router>
      <div className="App">
      
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/checkout" element={<><Header /><Checkout/></>} />
          <Route path="/" element={<><Header /><Home /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
