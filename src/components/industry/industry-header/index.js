import React from 'react'
import './style.css'
const IndustryHeader = () => {
  return (
    <div className='industry-header-wrapper' data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <p className='industry-top-heading'>Empower your</p>
      <p className='industry-middle-heading'>marketing & <br></br>creative <br></br>agencies</p>
      <p className='industry-heading-content'>MeMate – Comprehensive Business Management Software for Creative Agencies. Allows you to combine the best features of project management, accounting, quoting, and invoicing. Communicate with clients and submit jobs from a single, centralised platform.</p>
      <button className='industry-heading-button'>Request a Demo</button>
    </div>
  )
}

export default IndustryHeader
