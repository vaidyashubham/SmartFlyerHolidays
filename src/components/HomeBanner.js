import React from 'react'
import { Link } from 'react-router-dom';

function HomeBanner() {
  return (
    <div className="banner_w3lspvt" id="home">
      <div className="csslider infinity" id="slider1">
        <ul className="banner_slide_bg">
          <li>
            <div className="slider-info bg1">
              <div className="bs-slider-overlay">
                <div className="banner-text">
                  <div className="container">
                    <h2 className="movetxt agile-title text-capitalize">A More Rewarding Way To Travel The World.</h2>
                    <p className="fs-4 font-weight-bold">Tourism. Education For The Mind & Education For The Heart.</p>
                    <Link to='/contact' className="btn text-white">Contact Us</Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
          </li>
          <li>
          </li>
          <li>
          </li>
        </ul>
        <div className="navigation">
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
