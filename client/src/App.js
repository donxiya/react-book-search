
import React, { Component } from "react";
import './App.css';
import Saved from "./pages/SaveBooks";
import Search from "./pages/SearchBook";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component{
  state = {
    books: ""
    // message: ""
  }
  render(){
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
