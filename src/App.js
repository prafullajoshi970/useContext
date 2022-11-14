import contextMain  from './context';
import Home from './components/Home';
import Contact from './components/Contact';
import Service from './components/Service'
import { useState } from 'react';
import {BrowserRouter,Routes, Route} from "react-router-dom";



const App=()=> {
  const [isLight,setIsLight]=useState(true);
  const changeTheme=()=>{
    setIsLight((prevState)=>{
      return !prevState
    }
    )
  }
  return (
    <BrowserRouter className="all">
    <contextMain.Provider value={{isLight,changeTheme}}>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Service" element={<Service/>}/>
    </Routes>
    </contextMain.Provider>
    </BrowserRouter>
  )
}

export default App;
