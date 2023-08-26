import React from "react";
import Img1 from "../images/dog.png";
import Img2 from "../images/angrycat.jpg";
import Img3 from "../images/cat.jpg";
import Img4 from "../images/midleeyellow.jpg";
import Img5 from "../images/monkry.jpg";
import Img6 from "../images/styllcat.jpg";
import Img7 from "../images/yellow.jpg";
import Img8 from "../images/monkry.jpg";

function Home() {
  return (
    <div className="main">
      
      <div className="home">
      <div className="first"></div>
      <div className="second"></div>
      <div className="third"></div>
      <div className="four"></div>
        <h4>Voted #1 Worldwide </h4>
        <h1>
          The <span className="b-bg">be</span>st solution for you <span className="p-c">and</span>
          <br /> your<span className="y-c"> customers</span>
        </h1>
      </div>
      
      <div className="home-img">
        <img className="img1" src={Img7} alt="" />
        <img className="img2" src={Img3} alt="" />
        <img className="img3" src={Img2} alt="" />
      </div>
      
    </div>
  );
}

export default Home;
