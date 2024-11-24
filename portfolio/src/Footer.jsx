import React from 'react'
import './Styles/Footer.css'

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Footer() {
  return (
    <div className='footer' > 
      <h2 id='x1'>Mohammed Sharmuddin</h2>
      <div className='items'>
        <a href="#about">About Me</a>
        <a href="#skill">Skills</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
    </div>

    <div className="imm">
      <div className="a11">
        <a href="https://www.instagram.com/mdsharmuddin_07/?hl=en">
         <InstagramIcon/>
        </a>
      </div>
      <div className="a12">
        <a href="https://www.linkedin.com/in/mohammed-sharmuddin-27699327a/">
          <LinkedInIcon/>
        </a>
      </div>
      <div className="a13">
        <a href="https://www.naukri.com/mnjuser/profile?id=&altresid">
       <h5>Naukari.com</h5>
        </a>
      </div>
       
        
       
    </div>
    <h3 id='w1' >© 2024 Mohammed Sharmuddin. All rights reserved.</h3>
    </div>
  )
}

 