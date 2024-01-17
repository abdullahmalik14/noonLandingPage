import React from 'react'
import advertise from '../images/advertise.avif'

const Advertise = () => {
  return (
    <div style={{backgroundColor:"#E2E1E1",padding:"10px"}}>

        <img src={advertise} style={{width:"100%",boxSizing:'border-box',objectFit:"contain"}} alt="" />

        <br />
    </div>
  )
}

export default Advertise