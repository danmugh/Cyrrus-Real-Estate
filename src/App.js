import React, { useState } from 'react';
import Navbar from "./component/Navbar";
import GlobalStyle from "./globalStyle";
import Hero from "./component/Hero";
import {SliderDataOne} from "./data/SliderData";
import Dropdown from "./component/Dropdown";
import InfoSection from "./component/InfoSection";
import {InfoData} from "./data/InfoData";

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
              <InfoSection { ...InfoData } />
          </div>
      )
}

// http://192.168.1.3:3000


export default App;
