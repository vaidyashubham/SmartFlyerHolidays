import React from 'react'
import { Link } from 'react-router-dom'
import BannerImg from './BannerImg'

function FormSuccess() {
  return (
    <div>
      <BannerImg imgObj="assets/images/bg_contact.jpg" />
      <div className="container py-md-5">
        <h3 className="heading text-center mb-3 mb-sm-5">Form Submitted Successfully</h3>
        <h5 className="text-center">
          Our support team will get back to you soon!
        </h5>
        <div className="text-center">
          <div className="title-desc text-center px-lg-5">
            <Link to="/" className="btn mt-lg-4 mt-3 read scroll text-white mr-3" role="button">Take Me Home</Link>
            <Link to="/contact" className="btn mt-lg-4 mt-3 read scroll text-white" role="button">Contact Support</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormSuccess
