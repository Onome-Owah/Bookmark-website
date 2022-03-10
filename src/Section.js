import React, { useState } from 'react'
import './Section.css'
import hero from '/Users/onomeowah/Desktop/SCHOOL PROJECTS/React/secondreactproject/src/Images/illustration-hero (1).svg'



const Section = () => {

const [simple, setSimple] = useState ('A clean interface to organize your favorite website. Open a new browser tab and see your site load instantly. Try for free.')


const camera=()=>{


  if( simple==  'A clean interface to organize your favorite website. Open a new browser tab and see your site load instantly. Try for free.' ){
    setSimple('With Chrome, simply log into your browser, using the link at the bottom. I am testing out useState because I want to use it everywhere')

  }
else if( simple== 'With Chrome, simply log into your browser, using the link at the bottom. I am testing out useState because I want to use it everywhere'){


setSimple('A clean interface to organize your favorite website. Open a new browser tab and see your site load instantly. Try for free.' )
}



}



const next=() =>{

  setSimple('A functional useState, where you can carry out multiple function with any gliches. Built for simplicity and functionality')
}






  return (
    <div className='all'>
      
      <div className='sec'>
      <img className='hero' src={hero} alt="" />
      <div className='blue'></div>
      </div>
    
      


    
     <div className='sec2'>
     <div className='simple'>
        <h1>A Simple BookMark Manager</h1>
      <p>{simple}</p>
      </div>

      <div className='flex1'>
        
            <button onClick={()=>{camera()}} className='chrome'>Get it on Chrome</button>
        

        
            <button onClick={()=>{next()}} className='fire'>Get it on Firefox</button>
      

      </div>
     </div>
  


    </div>
  )
}

export default Section