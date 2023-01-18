import React from 'react'
import "./About.css"
import aboutimg from './aboutimg.jpg'

function About() {
  return (
    <div id="about" className="about-parent">
        <div className='about-text'>
          <h1 className='about-header animate__animated animate__backInUp'>About</h1>
          <hr></hr>
          <p className='about-para animate__animated animate__backInLeft'>I am a student studying at Sri Sairam Institute of Technology. I am a pre-final year student
            persuing Computer Science and Engineering. I first felt the power of computer science in my own hands after printing
            the text "Hello World" in C language. I love to code, debug and build awesome projects in 
            my free time. I love to explore and learn new Technology everyday. I love the concepts of blockchain, Machine learning and Cybersecurity. 
            I love to work in Linux environments. The idea of open-source inspired me a lot.
          </p>
        </div>
        <div className='image-container animate__animated animate__backInRight'>
          <img className='about-img' src={aboutimg} alt='A gamers life' />
        </div>
    </div>
  )
}

export default About