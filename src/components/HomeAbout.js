import React from 'react'
import { Link } from 'react-router-dom';

function HomeAbout() {
  return (
    <section className="content-info py-5" id="about">
      <div className="container py-md-5">
        <h3 className="heading text-center mb-3 mb-sm-5">Why SmartFlyer ?</h3>

        <div className="info-w3pvt-mid text-center px-lg-5">

          <div className="title-desc text-center px-lg-5">
            <img src={require('../logo.png')} alt="" className="img-fluid" />
            <p className="px-lg-5">At SmartFlyer Holidays Pvt Ltd, we offer our customers Theca-appointment of through travel schedules inside a 24 hour turnaround time. Our group of very talented staff have been prepared to comprehend customer needs and over the best choice accessible. We discount and retail our bundles and this give us the front line as far as offering our customers in the most aggressive costs. Innovation has empower us to arguments the utilisation of most recent reservations framework to give prompt input to our customers wherever conceivable. We have partners with reputable tour operators in various destination for the best rates for group and individual tour packages.</p>
            <Link to="/about" className="btn mt-lg-4 mt-3 read scroll text-white" role="button">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout
