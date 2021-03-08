import React, { Component } from 'react';
import Navbar from "./component/Navbar";
import GlobalStyle from "./globalStyle";
import Hero from "./component/Hero";
import {SliderDataOne} from "./data/SliderData";

class App extends Component {
  render() {
      return (
          <div>
              <GlobalStyle/>
              <Navbar/>
              <Hero slides={ SliderDataOne } />
          </div>
      )
  }
}


// http://192.168.1.3:3000
// <span className="material-icons-outlined">
// account_balance
// </span>

export default App;
