import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
 import Header from "./Header"
function App() {
  return (
    <Router>
    <div className="App">     
     <Switch>       
       {/* "/checkout" route for the checkout page */}
      <Route path="/checkout">
      <Header/>
        <h1>checkout</h1>
      </Route>
      {/* "/login" route for the login/auth page */}
      <Route path="/login">
      <Header/>
        <h1>login</h1>
      </Route>
      {/* "/" will be the default home page route */}
      <Route path="/">
        <Header/>
        <h1>Home Page</h1>
      </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
