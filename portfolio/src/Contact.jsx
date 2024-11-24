import React from 'react'
import './Styles/Contact.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
  return (
    <div className='contact' id='contact'>
        <h1 id='z1'>Contact </h1>
        <h2 id='c1'>Feel free to reach out to me for any questions or opportunities!</h2>
        <div className="contact1">
        <div className="c10">

        <form action="">
            <label htmlFor="">Name :</label> <input type="text" placeholder='Enter The Name'  required/> <br />
            <label htmlFor="">Email:</label> <input type="email" placeholder='Enter The Email'  required/> <br /> 
            <label htmlFor="">Phone :</label> <input type="text" placeholder='Enter The Phone'  required/> <br />
            {/* <label htmlFor="">Contact:</label> <input type="text" placeholder='Enter The Name'  required/> <br /> */}
            <label htmlFor="">Message :</label> <input type="message" placeholder=' Enter Text'  required/><br />
            <button id='b20'>Sumbit</button>
            </form>
    
          </div>
          {/* <div className="c2">
             <InstagramIcon />@Md Sharmuddin_07 <br />
             <EmailIcon/>mdsharmuddin786@gmail.com <br />
             <LinkedInIcon/> linkedin.com/in/md-sharmuddin-27699327a
          </div> */}
        </div>
         
    </div>
  )
}

