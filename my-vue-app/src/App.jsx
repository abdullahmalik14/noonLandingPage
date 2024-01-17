import NavScrollExample from './components/Navbar'
import React from 'react'
import Navbar_menu from './components/Navbar_menu'
import './App.css'
import Heroic_slider from './components/Heroic_slider'
import Product_images from './components/Products_images'
import Card_Section_One from './components/Main_section'
import { Products } from './components/Products'
import Advertise from './components/Advertise'

const App = () => {
  return (
  <>
    <NavScrollExample/>
    <Navbar_menu/>
  <Heroic_slider/>
  <Product_images/>
  <Card_Section_One/>
  <Products/>
  <Advertise/>
  <Products />
  </>
  )
}

export default App