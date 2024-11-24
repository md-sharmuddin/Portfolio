import React from 'react'
import './Styles/Projects.css'

export default function Projects() {
  return (
    <div className='projects' id='project'>
       <h1 id='d1'>Projects </h1>
   
      <div className="prj">
      <div className="img">
        <img id='bch' src="https://www.vistaresidences.com.ph/assets/img/how-blockchain-technology-affect-the-condo-industry.png" alt="" />
      </div>
     
      <div className="des">
      <b>
    <u>  <h2 id='d2'> BlockChain Technology In Finanial Indusrty To Enhance Scalability :</h2></u>
    <h3>This project is to enhance financial sector security and scalability via blokchain integration. </h3>
    <h3>Drawback of Traditional Method include Vulnerable to hacks, single point  of failure,no data immutability and traceable transaction. </h3>
    <h3>We are using ethereum in this project,it  creates “Smart Contracts”.</h3>
    <h3>This projects provides scalability improvement,reduce transaction time, cost reduction,interoperability,security enhancement.</h3>
    <u> <h2>Technologies :</h2></u>
    <div className="tech">
      <h3 id='m1'> Python</h3>
      <h3 id='m2'>Anaconda</h3>
      <h3 id='m3'>Django</h3>
      <h3 id='m4'>Mysql Lite </h3>
    </div>
  </b>
      </div>


      </div>
      <br />
      <br />

      {/* <u><h1>2. Detection Of Fake Bank Currency Using Cyber Security Model: </h1></u> */}

      <div className="prj2">
        <div className="p1">
          <img id='bch2' src="https://th.bing.com/th/id/OIP.9mRZ-qWTp75hk09ZRs4w3gHaE8?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
        </div>
        <div className="p2">
          <b>
            <h2> <u>Detection Of Fake Bank Currency Using Cyber Security Model:</u></h2>
            <h3>Developed a model to identify counterfeit banknotes, leveraging advanced cybersecurity practices to ensure accuracy and reliability in detecting fake currency.</h3>
            <h3> Utilized Machine Learning (ML) algorithms, Python and image processing techniques to analyze and classify currency images.</h3>
            <h3>I gained  valuable  experience and enhanced my skills in cyber security, I worked on detection of fake bank currency using   cyber security model project</h3>
            <u><h2>Technologies:</h2></u>
             <div className="tch12">
               <h3 id='n1'>Python</h3>
               <h3 id='n2'>Anaconda 3.7</h3>
               <h3 id='n3'>Jupiter</h3>
               <h3 id='n4'>Google Colab</h3>
             </div>
          </b>
        </div>
      </div>

    </div>

  )
}
