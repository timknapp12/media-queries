import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Typist from "react-typist";

class App extends Component {
  constructor() {
    super();

    this.state = {
      anim1: false
    };
  }
  anim1Click() {
    this.setState({
      anim1: !this.state.anim1
    });
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
        <div className="slide" />
        <h1> CSS ANIMATIONS</h1>
        <div className={this.state.anim1 ? "square animation1" : "square"} />
        <button onClick={e => this.anim1Click()}>Click me</button>
        <div className="tire animation2">
          <div>*******</div>
        </div>
        <button>Click me</button>
        
          <h3>Inside the Studio</h3>
          
          <Typist className="typewriter">
          <Typist.Delay ms={500} />
          <span>Wanna see how it's done?</span>
          <Typist.Backspace count={24} delay={2000} />
          <span> Step 1 - make a pot </span>
          <Typist.Backspace count={20} delay={2000} />
          <span> preferably in the wilderness </span>
          <Typist.Backspace count={30} delay={2000} />
          <span> Step 2 - fire it in the kiln </span>
          <Typist.Backspace count={30} delay={2000} />
          <span> Step 3 - glaze it and fire it again </span>
          <Typist.Backspace count={36} delay={2000} />
          <span> Step 4 - apply horse hair </span>
          <Typist.Backspace count={18} delay={2000} />
          <span>  or peacock feathers </span>
          <Typist.Backspace count={30} delay={2000} />
          <span></span>
        </Typist>
      </div>
    );
  }
}

export default App;
