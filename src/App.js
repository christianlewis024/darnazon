import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
 
function App() {
  return (
    <Router>
    <div className="App">
     <h2>Hi friends</h2>
     <Switch>       
       {/* "/checkout" route for the checkout page */}
      <Route path="/checkout">
        <h1>checkout</h1>
      </Route>
      {/* "/login" route for the login/auth page */}
      <Route path="/login">
        <h1>login</h1>
      </Route>
      {/* "/" will be the default home page route */}
      <Route path="/">
        <h1>Home Page</h1>
      </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
