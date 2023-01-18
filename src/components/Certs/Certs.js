import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { certificate } from './certificate'
import './Certs.css'


const Certs = () => {
  const autoplayOptions = {
    delay: 1800,
    stopOnInteraction:false
  }
  const [emblaCert] = useEmblaCarousel({ loop: true },[Autoplay(autoplayOptions)])
  return (
    <div id="certification" className='certs_parent'>
      <h1 className='certs-header'>My Certifications</h1>
      <hr className='certs-divider'></hr>
    <div className="certs " ref={emblaCert}>
      <div className="certs__container">
        
          {
            certificate.map((item,index) => {
              return(
                <div   key={item.description} className="certs__slide">
                  
                  <div className="certs_contents">
                    <div>
                   
                        <img data-atropos-offset="-5" className="certs_slider_images" src={item.url}></img>
                  
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
export default Certs
