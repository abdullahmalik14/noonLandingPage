import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroicslider1 from '../images/heroicslider1.avif'
import heroicslider2 from '../images/heroicslider2.avif'
import heroicslider3 from '../images/heroicslider3.avif'
import heroicslider4 from '../images/heroicslider4.avif'
import heroicslider5 from '../images/heroicslider5.avif'
import heroicslider6 from '../images/heroicslider6.avif'
import heroicslider7 from '../images/heroicslider7.avif'
import heroicslider8 from '../images/heroicslider8.avif'
import heroicsideimg from '../images/heroicsideimg.avif'
import heroicsideimg2 from '../images/heroicsideimg2.avif'


const Heroic_slider = () => {
  return (
    <>
    <div className='container-fluid' style={{width:'100%',marginLeft:'-12px',marginTop:'-20px'}}>
        <div className='row'>
            <div className='col-md-9'>
            <Carousel data-bs-theme="light" style={{marginTop:"20px"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={heroicslider1}
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={heroicslider2}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={heroicslider3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={heroicslider4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={heroicslider5}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={heroicslider6}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={heroicslider7}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={heroicslider8}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

            </div>

            <div className='col-md-3 d-flex' style={{marginLeft:"-20px"}}>
            
                <img src={heroicsideimg} alt=""
                style={{width:"180px",height:"210px",marginTop:"20px",boxSizing:"border-box"}}   />

                <img src={heroicsideimg2} alt=""
                style={{width:"180px",height:"210px",marginTop:"20px",boxSizing:"border-box"}} />

            </div>

        </div>

    </div>
    
    
    </>
  )
}

export default Heroic_slider