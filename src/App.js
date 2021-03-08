import React, { useState } from 'react';
import Navbar from "./component/Navbar";
import GlobalStyle from "./globalStyle";
import Hero from "./component/Hero";
import {SliderDataOne} from "./data/SliderData";
import Dropdown from "./component/Dropdown";

function App () {

      const [isOpen, setIsOpen] = useState(false)

      const toggle = () => {
          setIsOpen(!isOpen)
      }

      return (
          <div>
              <GlobalStyle/>
              <Navbar toggle={toggle}/>
              <Dropdown toggle={toggle} isOpen={isOpen} />
              <Hero slides={ SliderDataOne } />
          </div>
      )
}

// http://192.168.1.3:3000
// <span className="material-icons-outlined">
// account_balance
// </span>

export default App;
