import React, {useEffect, useState, useContext, useReducer, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';   


const BannerSlider = (props) => {
    return(
        <>
        
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/banners/image1.png"
        alt="First slide"
        height="400"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/banners/image2.png"
      alt="Third slide"
      height="400"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/banners/image3.jpg"
      alt="Third slide"
      height="400"
    />
  </Carousel.Item>
</Carousel>
        </>
    )
}

export default BannerSlider;

