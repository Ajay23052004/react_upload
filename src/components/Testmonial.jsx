import React from 'react';
import Img2 from '../images/midleeyellow.jpg'
import Img1 from '../images/redbluemonky.jpg'
import Review from './Review.jsx';

function Testmonial(){
    return (<div className="main">
        <div  className="home ">
        <h4>Testomonial</h4>
        <h1 >What People Say About us</h1>
        <p>No matter the project, our team can handle it.</p>
      </div>
      <div className="r-card">
      <Review />
    <Review />
    <Review />
      </div>
   
     
    </div>);
}

export default Testmonial;