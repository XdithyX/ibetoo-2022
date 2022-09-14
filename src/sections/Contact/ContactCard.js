import React from 'react'
import { FiPhoneCall, FiLinkedin, FiMail } from "react-icons/fi";



function ContactCard({ name, designation, image, email, phone, linkedIn }) {
  return (
    <div className='contactCard'>
      <div className='contact_img'>
        <img src={image} alt="" />
      </div>
      <h2>{name}</h2>
      <h3>{designation}</h3>
      <div className='contact_social'>
        <a href={`tel:${phone}`} target="_blank" rel="noreferrer">
          <FiPhoneCall className='contact_social_icon'/>
        </a>
        <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
          <FiMail className='contact_social_icon'/>
        </a>
        <a href={linkedIn} target="_blank" rel="noreferrer">
          <FiLinkedin className='contact_social_icon'/>
        </a>
      </div>
    </div>
  )
}

export default ContactCard