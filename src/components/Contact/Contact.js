import React, { Component } from 'react'
import { CirclesWithBar } from 'react-loader-spinner'
import './contact.css'
import { db } from './Firebase-Config'
import {collection, addDoc} from "firebase/firestore"
import {contact_labels} from './contact-labels'
import { useState } from 'react'
import { async } from '@firebase/util'


function Contact() {
  const [data,setData]=useState({name:"",company:"",email:"",message:""})

  const {name,company,email,message}=data
  const [result,setResult] = useState("")
  const collectionReferenceObject = collection(db, "Client_message_data")


  const addDatatoDb = async() => {
     if(name!=="" && email!==""){
      await addDoc(collectionReferenceObject, {user_name:name, mail:email, user_company:company, user_message:message})
     } 
  }

  const handleSubmit = () => {
    addDatatoDb()
    setResult(name)
  }
  if (result==""){
  return (
    <div id="contact" className='form-container'>
      <h2 className='contact_header'>Contact</h2>
      <hr className='contact_hr'></hr>
    <div className='form-parent'>
      <label className='label_class common_class'>Name:</label>
      <input className='input_class common_class' required
        placeholder='What can I call you?'
        value={name}
        onChange={item => setData( {...data, name: item.target.value})}
      />

      <label className='label_class common_class'>Email:</label>
      <input required
      className='input_class common_class'
        placeholder='How can I contact you?'
        value={email}
        onChange={item => setData( {...data, email: item.target.value})}
      />

      <label className='label_class common_class'>Company:</label>
      <input
      className='input_class common_class'
        placeholder='Where do you work?'
        value={company}
        onChange={item => setData( {...data, company: item.target.value})}
      />

      <label className='label_class common_class'>Message:</label>
      <textarea required
      className='textarea_class common_class'
        placeholder='Do you have any Message? Project collaborations and Internships are always welcome..'
        rows={10}
        cols={10}
        value={message}
        onChange={item => setData( {...data, message: item.target.value})}
      />
        
    </div>
    <button className='submitButton common_class' onClick={handleSubmit}>SUBMIT</button>
    </div>
  )}else{
    return(
      <div className="after_submit_parent">
        <h3 className="submit_header">Information Submitted</h3>
        <hr className='submit_hr'></hr>
        <div className="circles">
          <CirclesWithBar
            height="200"
            width="200"
            color="#990099"
            visible={true}
            outerCircleColor="#730099"
            innerCircleColor="#ffffff"
              barColor=""
              ariaLabel='circles-with-bar-loading'
          />
          </div>
         
        
      </div>
    )
  }
}

export default Contact
