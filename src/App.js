import React, { Component } from 'react';
import Navbar from "./component/Navbar";
import GlobalStyle from "./globalStyle";
import Hero from "./component/Hero";

class App extends Component {
  render() {
      return (
          <div>
              <GlobalStyle/>
              <Navbar/>
              <Hero/>
          </div>
      )
  }
}

// <span className="material-icons-outlined">
// account_balance
// </span>

export default App;
