import React from 'react'
import './intro.css';
import Introimg from '../../assets/Hero image.png'; 
import circlesimg from '../../assets/Circles.png';

const Intro = () => {
  return (
    <section id="introsection">
        <div className="introcontent">
            <div className="introtext">
            <div className="introtextholder">
                <p className="introhead">
                Having challenges with managing stocks,
customers, and staff?
            </p>

            <p className="introdes">
             Grow better and faster with Akanta. We provide resources to help
organize customer’s data, track interactions, mange inventory and
streamline communication with both customers and staff.
Enhance productivity, improve customer satisfaction and boost 
sales performance.
            </p>
            </div>

            <div className="introbtns">
                <button className="introbtn">Get Started</button>
                </div>
        </div>

        <div className="introimgs">
            <div className="intorimg">
            <img src={Introimg} alt="" className="" />
            </div>
                    <div className="introim">
                         <img src={circlesimg} alt="" className=" introcircle" />
                    </div>
        </div>


        </div>
    </section>
  )
}

export default Intro
