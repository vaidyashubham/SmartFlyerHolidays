import React from 'react'
import { Link } from 'react-router-dom';

function BookAppointment() {
  return (
    <section className="order-sec py-5">
      <div className="container py-md-5">
        <div className="test-info text-center">
          <h3 className="tittle order">
            <span>CALL US TO BOOK AN APPOINTMENT</span>Our team will call back immediately and Book the Appointment</h3>
          <h4 className="tittle my-2"> +91 9595016858</h4>

          <div className="read-more mx-auto m-0 text-center">
            <Link to="/contact" className="read-more scroll btn text-white">Click here</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookAppointment
