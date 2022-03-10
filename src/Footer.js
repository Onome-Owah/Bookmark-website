import React from 'react'
import './Footer.css'
import mark from '/Users/onomeowah/Desktop/SCHOOL PROJECTS/React/secondreactproject/src/Images/logo-bookmark.svg'
import {FaFacebookSquare} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='end'>


        <img className='marker' src={mark} alt="" />



        
        <h6><a className='bottom' href="">FEATURES</a></h6>
        <h6><a className='bottom' href="">PRICING</a></h6>
        <h6><a className='bottom' href="">CONTACT</a></h6>
        


        <div>
        <a className='social' href=""> <FaFacebookSquare size={30} /> </a>
        <a className='social' href=""><FaTwitter size={30}/></a>

        </div>
       
    </div>
  )
}

export default Footer