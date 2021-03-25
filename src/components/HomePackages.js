import React from 'react'
import { Link } from 'react-router-dom';

function HomePackages({ packages}) {
  return (
    <section className="pricing py-5">
      <div className="container py-md-5">
        <h3 className="heading text-capitalize text-center mb-3 mb-sm-3"> Place Destination</h3>
        <h3 className="tittle order text-center">
          We organize customised holiday packages, both domestic and international
							</h3>
        <div className="row pricing-grids">
          {packages}
        </div>
        <div className="title-desc text-center px-lg-5">
          <Link to="/package-list" className="btn mt-lg-4 mt-3 read scroll text-white" role="button">View More</Link>
        </div>
      </div>
    </section>
  )
}

export default HomePackages
