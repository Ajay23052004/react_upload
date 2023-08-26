import React from "react";
import {LearnButton,Btn} from "./Btn.jsx";


const name ="Learn More";

function Services() {
  return (
    <div className="main services">
      <div  className="home ">
        <h4>our Services</h4>
        <h1 >What we can do for you</h1>
      </div>
      <div className="card-container">
        <div className="card">
          <h2>Lorem ipsum dolor sit </h2>
          <p>
            Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis.
            Bibendum vulputate cras aenean.
            
          </p>
          <LearnButton name={name}/>
        </div>
        <div className="card">
          <h2>Lorem ipsum dolor sit </h2>
          <p>
            Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis.
            Bibendum vulputate cras aenean.
            
          </p>
          <LearnButton name={name}/>
        </div>
        <div className="card">
          <h2>Lorem ipsum dolor sit </h2>
          <p>
            Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis.
            Bibendum vulputate cras aenean.
            
          </p>
          <LearnButton name={name}/>
        </div>
        <div className="card">
          <h2>Lorem ipsum dolor sit </h2>
          <p>
            Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis.
            Bibendum vulputate cras aenean.
          
          </p>
          <LearnButton name={name}/>
        </div>
      </div>
    </div>
  );
}

export default Services;
