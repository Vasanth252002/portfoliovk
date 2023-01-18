import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './SkillSet.css'
import MAD from './MAD.png'
import DD from './DD.png'
import ML from './ML.jpg'
import CP from './CP.jpg'
import WD from './WD.jpg'
import Atropos from 'atropos/react'
import 'atropos/css'
import 'animate.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const SkillSet = () => {
  const autoOptions = {
    delay: 1800,
    stopOnInteraction:false,
    

  }
  const files=[
    {
      filename:MAD,
      desc: 'MOBILE APP DEVELOPMENT'
    },
    {
      filename:DD,
      desc: 'DRONE DEVELOPMENT'
    },
    {
      filename: ML,
      desc: 'MACHINE LEARNING'
    },
    {
      filename:CP,
      desc: 'COMPETITIVE PROGRAMMING'
    },
    {
      filename:WD,
      desc: 'WEB DEVELOPMENT'
}]
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay(autoOptions)])
  return (
    <div className='skill_parent'>
    
      <h1 className='skills-header'>My Skills</h1>
   
      <hr className='skill-divider'></hr>
    
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
        
          {
            files.map((item,index) => {
              return(
                <div key={index} className="embla__slide">
                  
                  <div className="slide_contents">
                    <div>
                      <Atropos>
                        <img data-atropos-offset="-5" className="slider_images" src={item.filename}></img>
                        <div data-atropos-offset="5" className='slider_text'>{item.desc}</div>
                      </Atropos>
                      </div>
                  </div>
                
                </div>
              )
            })
          }
        
      </div>
    </div>
    </div>
  )
}

export default SkillSet
//reached safe state