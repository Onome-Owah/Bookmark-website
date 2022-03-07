import React from 'react'
import './Section2.css'
import tab from '/Users/onomeowah/Desktop/SCHOOL PROJECTS/React/secondreactproject/src/Images/illustration-features-tab-1.svg'

const Section2 = () => {
  return (
    <div className='secondary'>
        <div className='tab2'>
        <div className='secondblue'></div>
        <img className='tab1' src={tab} alt="" />
        </div>
        

        <div className='click'>
        <h1>Bookmark in one click</h1>
        <p>Organize your bookmark however you like. Our simple drag-and-drop interface gives you complete control over how you manage 
          your favourite site
        </p>
    </div>
    </div>
  )
}

export default Section2