import React from 'react'
import './Styles/About.css'
import smt from './Styles/smt.jpg'

function About() {
  return (
    <div className='about' id='about'>
       <div className="disc">
         
          <big><big><b><h1>Hi, I am  <br />Mohammed <br />Sharmuddin</h1></b></big></big>
          <h1 class="animated-heading">
          <span>I</span>
          <span>am</span>
          <span>a</span>
         <span>Web</span>
         {/* <span>Stack</span> */}
         <span>Developer !</span>
        </h1 >
           <b id='b1'> I am a motivated and versatile individual, always <br /> eager to take on new challenges. With a passion for  <br />learning I am dedicated to delivering high-quality results. <br /> With a positive attitude and a growth mindset,<br />I am ready to make a meaningful contribution and <br /> achieve great things.</b>
        </div>
        <div class="animated-container">
               <img id='mm' src={smt} alt="" />
             <div class="overlay"></div>
          </div>

     
    </div>
  )
}

export default About