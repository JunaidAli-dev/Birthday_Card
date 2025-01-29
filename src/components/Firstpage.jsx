import React from 'react'
import "tailwindcss";
import { GiLoveLetter } from "react-icons/gi";
import { NavLink } from 'react-router-dom'

const Firstpage = () => {
  return (
    <div>
      <h1 className='firstline'>Wish you a very Happy Birthday my love🎉🥳🎂</h1>
      <p className='secondline'>I have something for you, I hope you like it🙈</p>
      <div className="giftbutton">
      <NavLink className={(e)=>{return e.isActive? "btnred": ""}} to="/card"><GiLoveLetter size={50}/></NavLink>
      </div>
    </div>
  )
}

export default Firstpage
