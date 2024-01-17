import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import navimg from '../images/navbarimg.png'
import heroicimg from '../images/heroicimg.avif'

const Navbar_menu = () => {
  return (
  <>
    
  <div className='main_div_navbar container-fluid d-flex' style={{paddingTop:"15px",cursor:"pointer",backgroundColor:"#f7f7fa" }}>

    <h6 style={{marginRight:"25px",color:"blue"}}>ALL CATEGORIES <ArrowDropDownIcon style={{color:"blue",borderRight:"0.1px solid blue",fontSize:"30px" ,cursor:"pointer"}}/></h6>

<ul className='navbar_menu d-flex ' >
    <li style={{marginLeft:"-40px"}}>ELECTRONICS</li>
    <li>MEN</li>
    <li>WOMEN</li>
    <li>HOME</li>
    <li>BEAUTY & FRAGNANCES</li>
    <li>BABY</li>
    <li>TOYS</li>
    <li>SPORTS</li>
    <li>HEALTH & NEUTRITION <ArrowForwardIosIcon /></li>
    <img src={navimg} alt="" style={{width:"150px",marginLeft:"-30px"}}/>

    
</ul>
   

  </div>
  <img src={heroicimg} alt="" style={{boxSizing:'border-box',width:"100%"}} />
  </>
  )
}

export default Navbar_menu