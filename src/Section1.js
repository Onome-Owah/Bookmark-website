import React from 'react'
import './Section1.css'

const Section1 = () => {
  return (
    <div>
        <div className='features'>
        <h3 className='feat'>Features</h3>
        <p className='text'>Our aim is to make it quick and easy for you to access you favourite websites. Your bookmark sync between your devices so you 
            access them on the go.
        </p>
        </div>

        <div className='advance'>
            <hr className='h'></hr>
            <a className='b' href=""><p>Simple bookmarking</p></a>
            <hr className='h'></hr>
           <a className='b' href=""> <p>Speedy Searching</p></a>
           <hr className='h'></hr>
            <a className='b' href=""><p>Easy Sharing</p></a>
            <hr className='h'></hr>



            
        </div>
    </div>
  )
}

export default Section1