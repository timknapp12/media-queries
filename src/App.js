import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      anim1: false
    }
  }
  anim1Click(){
    this.setState({
      anim1: !this.state.anim1
    })
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <div className="title">Tim's Portfolio</div>
          <button className="menu-button">Menu =</button>
          <div className="links">
            <div>ABOUT</div>
            <div>DOWNLOAD</div>
            <div>CONTACT</div>
          </div>
        </nav>
        <div className="slide"></div>
        <h1> CSS ANIMATIONS</h1>
        <div className={ this.state.anim1 ? "square animation1" : "square"}></div>
        <button onClick={(e)=> this.anim1Click()}>Click me</button>
        <div className="tire animation2">
          <div>*******</div>
        </div>
        <button>Click me</button>
      </div>
    );
  }
}

export default App;