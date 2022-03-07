import React from 'react'
import './Section.css'
import hero from '/Users/onomeowah/Desktop/SCHOOL PROJECTS/React/secondreactproject/src/Images/illustration-hero (1).svg'
const Section = () => {
  return (
    <div className='all'>
      
      <div className='sec'>
      <img className='hero' src={hero} alt="" />
      <div className='blue'></div>
      </div>
    
      


    
     <div className='sec2'>
     <div className='simple'>
        <h1>A Simple BookMark Manager</h1>
      <p>A clean interface to organize your favorite website. Open a new browser tab and seeyour site load instantly. Try for free.</p>
      </div>

      {/* <div className='flex1'> */}
        
            <button className='chrome'>Get it on Chrome</button>
        

        
            <button className='fire'>Get it on Firefox</button>
      

      {/* </div> */}
     </div>
  


    </div>
  )
}

export default Section