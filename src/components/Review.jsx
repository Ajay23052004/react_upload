import React from "react";
import Img from '../images/yellow.jpg'
function Review() {
  return (
    <div className="main">
      <div className="review">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. est a eum voluptatibus sint ipsa consequatur
          placeat facere eos.
        </p>
        <div className="review-1">
            <div><img src={Img} alt="" /></div>
        <div>
        <h2>John Smith</h2>
        <p>Erat netus</p>
        </div></div>
        
        
        

      </div>
     
    </div>
  );
}

export default Review;
