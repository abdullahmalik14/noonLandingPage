import React from "react";
import { Product_Card } from "./products_cart";
import { Grid } from "@mui/material";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const products_arr = [
  {
    img_url:
      "https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240",
    title: "iPhone 14 Pro Max 256GB Deep Purple 5G With FaceTime - Middle East Version",
    dis_price: "AED 4,633",
    orignal_price: "5,099",
  },
  {
    img_url:"https://f.nooncdn.com/p/v1669724765/N40633047A_1.jpg?format=avif&width=240",
    title: "Sony PlayStation 5 Console (Disc Version) With Controller",
    dis_price: "AED 1838.00",
    orignal_price: "AED 2161.00",
  },
  {
    img_url:
      "https://f.nooncdn.com/p/v1663322644/N43241184A_1.jpg?format=avif&width=240",
    title: "T500 Bluetooth Full Touch Call Smartwatch With Replaceable Strap Black",
    dis_price: "AED 19.50",
    orignal_price: "AED 89.0 ",
  },
  {
    img_url:
      "https://f.nooncdn.com/p/v1680513490/N46554630A_2.jpg?format=avif&width=240",
    title: "KIKO MILANO Unlimited Double Touch Liquid Lip Colour 103 Natural Rose",
   
    dis_price: "AED 59.50 ",
    orignal_price: "AED 9.50     ",
  }, {
    img_url:
      "https://f.nooncdn.com/p/v1686663857/N41247610A_1.jpg?format=avif&width=240",
    title: "Apple iPhone 11 White 128GB 4G LTE (2020 - Slim Packing) - Middle East Version",
    rating: 4,
    dis_price: "AED 1949.00  ",
    orignal_price: "AED 760.00    ",
  }, {
    img_url:
      "https://f.nooncdn.com/p/v1686132049/N53347167A_1.jpg?format=avif&width=240",
    title: "Apple iPhone 14 Pro Max 256GB Deep Purple 5G With FaceTime - International Version",
    dis_price: "AED 4849.00    ",
    orignal_price: "AED 250.00    ",
  },
];

export const Products = () => {
  return (
    <>

<Carousel data-bs-theme="dark" style={{height:"510px",backgroundColor:"#F5F2F2"}}>
<Carousel.Item>
<div style={{paddingTop:"20px",backgroundColor:"#F5F2F2"}}>
        <h4>Recommended for you</h4>
    
      <Grid container>
        {products_arr.map((current_obj, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4} lg={2} xl={3}>
              <Product_Card
                
                card_data={current_obj}
              />
            </Grid>
          );
        })}
      </Grid>
      </div>
 
</Carousel.Item>

<Carousel.Item>
<div style={{paddingTop:"20px",backgroundColor:"#F5F2F2"}}>
        <h4>Recommended for you</h4>
    
      <Grid container>
        {products_arr.map((current_obj, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4} lg={2} xl={3}>
              <Product_Card
                
                card_data={current_obj}
              />
            </Grid>
          );
        })}
      </Grid>
      </div>
 
</Carousel.Item>

<Carousel.Item>
<div style={{paddingTop:"20px",backgroundColor:"#F5F2F2"}}>
        <h4>Recommended for you</h4>
    
      <Grid container>
        {products_arr.map((current_obj, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4} lg={2} xl={3}>
              <Product_Card
                
                card_data={current_obj}
              />
            </Grid>
          );
        })}
      </Grid>
      </div>
 
</Carousel.Item>
</Carousel>


    
    </>
  );
};






