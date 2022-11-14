import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import  contextMain from '../context'

const Navbar = () => {
  const{isLight,changeTheme}=useContext(contextMain)

  return (
    <div>
        
        <div onClick={()=>{changeTheme()}}>I Change Theme to {isLight?"Light":"Dark"}</div>
        <br/>
        <button><Link to="/">Home</Link></button>&nbsp;&nbsp;
        <button><Link to="/contact">contact</Link></button>&nbsp;&nbsp;
        <button><Link to="/Service">Service</Link></button>&nbsp;&nbsp;
        <br/>
        <br/>
        <button onClick={()=>{changeTheme()}}>Toggle Theme to {isLight?"Dark":"Light"}</button> 
    </div>
  )
}

export default Navbar