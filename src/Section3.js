import React from 'react'
import './Section3.css'
import chrome from '/Users/onomeowah/Desktop/SCHOOL PROJECTS/React/secondreactproject/src/Images/logo-chrome.svg'
import fire from '/Users/onomeowah/Desktop/SCHOOL PROJECTS/React/secondreactproject/src/Images/logo-firefox.svg'
import opera from '/Users/onomeowah/Desktop/SCHOOL PROJECTS/React/secondreactproject/src/Images/logo-opera.svg'
import dot from '/Users/onomeowah/Desktop/SCHOOL PROJECTS/React/secondreactproject/src/Images/bg-dots.svg'



const Section3 = () => {
  return (
    <div >
        <div className='extend'>
        <h1>Download the extension</h1>
        <p>We've got more browsers in the pipeline. Please do let us know if you have a favorite you would like to prioritize.</p>

        </div>
            
        <div className='browser'>
        <div className='chromes'>
        <img src={chrome} alt="" />
            <h3>Add to chrome</h3>
            <p>Minimum version 62</p>
            <img className='dot' src={dot} alt="" />
            <button className='but'>Add & install extension</button>
        </div>

        <div className='chromes'>
        <img src={fire} alt="" />
            <h3>Add to Firefox</h3>
            <p>Minimum version 55</p>
            <img className='dot' src={dot} alt="" />
            <button className='but'>Add & install extension</button>
        </div>


        <div className='chromes'>
        <img src={opera} alt="" />
            <h3>Add to Opera</h3>
            <p>Minimum version 46</p>
            <img className='dot' src={dot} alt="" />
            <button className='but'>Add & install extension</button>
        </div>

        </div>

    </div>
  )
}

export default Section3