import React, { useContext } from 'react'
import Navbar from './Navbar'
import './all.css'
import  contextMain  from '../context'
const Contact = () => {
  const{isLight}=useContext(contextMain)
  return (
    <>
      <div className={isLight?'light':'dark'}>
        <Navbar/>
        <br/>
        <br/>

        <h1>You can call me on prafullajoshi970@gmail.com</h1>
      </div>

    </>

  )
}

export default Contact