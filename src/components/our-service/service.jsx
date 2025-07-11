import React from 'react'
import './service.css'
import serviceimg1 from '../../assets/serviceimg1.png';
import serviceimg2 from '../../assets/serviceimg2.png';

const Service = () => {
  return (
    <section id="ourservice">
        <div className="servicecontents">
            <div className="servicecontent">
                <div className="serviceimgs">
                    <img src={serviceimg2} alt="" className="serviceimg" />
                </div>
                 <span className="servicetext">
                    <p className="servicehead">Structure Communnication</p>
                   
                     <p>
                        We structure your communication for clarity and 
effectiveness. use clear channels, set regular updates, and 
make sure everybody is aligned for better collaboration.
                    </p>
                   
                </span>
            </div>


             <div className="servicecontent">

                <span className="servicetext">
                    <p className="servicehead">Structure Communnication</p>
                    <p>
                        We structure your communication for clarity and 
effectiveness. use clear channels, set regular updates, and 
make sure everybody is aligned for better collaboration.
                    </p>
                </span>

                <div className="serviceimgs">
                    <img src={serviceimg1} alt="" className="serviceimg" />
                </div>
                
            </div>




              <div className="servicecontent">
                <div className="serviceimgs">
                    <img src={serviceimg2} alt="" className="serviceimg" />
                </div>
                 <span className="servicetext">
                    <p className="servicehead">Structure Communnication</p>
                    <p>
                        We structure your communication for clarity and 
effectiveness. use clear channels, set regular updates, and 
make sure everybody is aligned for better collaboration.
                    </p>
                </span>
            </div>
        </div>
    </section>
  )
}

export default Service
