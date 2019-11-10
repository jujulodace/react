import React, { Component } from 'react';
import './App.css';
import Bot from './bot'
import P4 from './p4'
import io from 'socket.io-client';



const page1 =  <Bot/>
const page2 = <P4/>
const page3 = <h1>page3</h1>;
//const page4 = <h1>page4</h1>;
class App extends Component {
  state = {
    name : "bob"
  }
  constructor(){
    super();
    this.socket = io('localhost:3001',{jsomp:false});
    this.socket.on('update',()=>this.setState({name: "Name"}));
  }
  render() {  
    return (
      <div className="App">
        <HelloWorld user="oui" />
        <h1>{this.state.name}</h1>
      </div>
    )
  }
}
class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.socket = io('localhost:3001',{jsomp:false});
    this.socket.on('update',()=>this.setState({name: "Name"}));
    this.state = {
      happy: false,
      page: page1,
      name : "bob"
    }
  }
  changerPage(a) {
    this.setState({
      page: a
    });
  }
  update(){
    this.socket.emit("update");
  }
  render() {  
    return (
      <div>
        <header className="App-header">
          <div className="menu" onClick={this.changerPage.bind(this,page1)}>page1</div>
          <div className="menu" onClick={this.changerPage.bind(this,page2)}>page2</div>
          <div className="menu" onClick={this.changerPage.bind(this,page3)}>page3</div>
          <div className="menu" onClick={this.update.bind(this)}>page4</div>
        </header>
        {this.state.page}
      </div>
    );
  }
}

export default App;
