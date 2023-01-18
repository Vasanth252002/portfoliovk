import React, { Component } from 'react'
import './Socials.css'
import 'atropos/css'
import Atropos from 'atropos/react';


export default class Socials extends Component {
  render() {
    return (
      <div className='social-parent'>
        <h1 className='social-header'>Socials and Profiles</h1>
        <hr className='hrtag'/>
        <div className='social-icons'>
          <Atropos highlight={false}
          rotateXMax={30}
          rotateYMax={30}
          ><a href='https://www.linkedin.com/in/vasanthakumaran-u-664134201/'><i class="fa-brands fa-linkedin iconclass"></i></a></Atropos>
          
          <Atropos highlight={false} rotateXMax={30} rotateYMax={30}><a href='https://github.com/Vasanth252002'><i class="fa-brands fa-github iconclass"></i></a> </Atropos>
          <Atropos highlight={false} rotateXMax={30} rotateYMax={30}><i class="fa-brands fa-instagram iconclass"></i></Atropos>
          <Atropos highlight={false} rotateXMax={30} rotateYMax={30}><a href='https://www.freecodecamp.org/fcc5ff47ecd-f5d8-4296-8567-036ccbeed2db'><i class="fa-brands fa-free-code-camp iconclass"></i></a></Atropos>
          <Atropos highlight={false} rotateXMax={30} rotateYMax={30}><i class="fa-brands fa-facebook iconclass"></i></Atropos>
        </div>
      </div>
    )
  }
}
