import React from 'react'
import './frame.css'
import Darkframe from '../../assets/Dark frame 1.png'

const Frame = () => {
  return (
    <section id="framesec">

       <div className="frameimgs">
         <img src={Darkframe} alt="" className="frameimg" />
       </div>
    </section>
  )
}

export default Frame
