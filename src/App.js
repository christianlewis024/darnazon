import React, {useEffect}from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import {useStateValue} from "./StateProvider"
import { auth } from "./firebase"
import { Unsubscribe } from '@material-ui/icons';

function App() {
  const [{ basket}, dispatch] = useStateValue();

  // Piece of code which runs based on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if ( authUser) {
        // the user is logged in 
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // the user is logged out 
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    return () => {
      // any cleanup operations go in here..
      unsubscribe()
    }
    
  }, [])

  return (
    <Router>
    <div className="App">     
     <Switch>     
      <Route path="/checkout">
      <Header/>
      <Checkout/>       
      </Route>
      <Route path="/payment">
        <Header/>
        <p>I am the payment route</p>
          
        
      </Route>
      <Route path="/login">
      <Header/>
      <Login/>
      </Route>
      <Route path="/">
        <Header/>
        <Home/>
      </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
