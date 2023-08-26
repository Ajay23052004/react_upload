import React from "react";
import { LearnButton, Btn } from "./Btn.jsx";
function Features() {
  return (
    <div className="main feature">
      <div className="card-container1">
        <div className="card c-1">
          <h3>Fully Managed</h3>
          <p>Lorem ipsum dolor sit nullam et quis ad cras porttitor</p>
          <LearnButton name={"Learn more"} />
        </div>
        <div className="card c-2">
          <h3>Fully Managed</h3>
          <p>Lorem ipsum dolor sit nullam et quis ad cras porttitor</p>
          <LearnButton name={"Learn more"} />
        </div>
      </div>
      <div className="last-cont">
        <div className="card c-3">
          <h3>Fully Managed</h3>
          <p>Lorem ipsum dolor sit nullam et quis ad cras porttitor</p>
          <LearnButton name={"Learn more"} />
        </div>
      </div>
    </div>
  );
}

export default Features;
