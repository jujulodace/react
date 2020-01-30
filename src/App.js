import React, { Component } from 'react';
import './App.css';
import Bot from './bot'
import P4 from './p4'
import io from 'socket.io-client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




class App extends Component {
  state = {
    name: "bob"
  }
  constructor() {
    super();
    this.socket = io('localhost:3001', { jsomp: false });
    this.socket.on('update', () => this.setState({ name: "Name" }));
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        <Router>
        <div>
        <header className="App-header">
         <Link to="/" className="menu">Home</Link>
         <Link to="/about" className="menu">About</Link>
         <Link to="/dashboard" className="menu">Dashboard</Link>
        </header>

          <hr />

          <Switch>
            <Route exact path="/">
            <Bot />
            </Route>
            <Route path="/about">
            <P4 />
            </Route>
            <Route path="/dashboard">
            <h1>page3</h1>
            </Route>
          </Switch>
        </div>
      </Router>
      </div>
      
    )
  }
}



export default App;
