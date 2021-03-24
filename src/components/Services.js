import React from 'react'

function Services() {
  return (
    <section className="services py-5" id="services">
      <div className="container py-md-5">
        <h3 className="heading text-center mb-3 mb-sm-5">Our Services</h3>
        <div className="">
          <div className="row welcome-bottom">
            <div className="col-lg-4 col-sm-6 px-2 mb-3">
              <div className="welcome-grid text-center py-5 px-4 morphism">
                <div className="hoverEffect"></div>
                <i className="fa fa-briefcase"></i>
                <h4 className="mt-4 mb-3 text-bl">Holiday Packages</h4>
                <p>Book your holiday packages with us. We provides best holiday packages for Couples,
                Family and Friends </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-sm-0 px-2 mb-3">
              <div className="welcome-grid text-center py-5 px-4 morphism">
                <div className="hoverEffect"></div>
                <i className="fa fa-plane"></i>
                <h4 className="mt-4 mb-3 text-bl">Air Ticket</h4>
                <p>We, offering the cheapest, most affordable domestic and international flight
                ticket fares. .</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-lg-0 px-2 mb-3">
              <div className="welcome-grid text-center py-5 px-4 morphism">
                <div className="hoverEffect"></div>
                <i className="fa fa-hotel"></i>
                <h4 className="mt-4 mb-3 text-bl">Hotels</h4>
                <p>Top rated Hotel Accommodation with well suited environment will be included under our packages.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-lg-0 px-2 mb-3">
              <div className="welcome-grid text-center py-5 px-4 morphism">
                <div className="hoverEffect"></div>
                <i className="fa fa-ship"></i>
                <h4 className="mt-4 mb-3 text-bl">Passport/Visa Assistance</h4>
                <p>We also provide passport and visa services to our clients on early basis.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 px-2 mb-3">
              <div className="welcome-grid text-center py-5 px-4 morphism">
                <div className="hoverEffect"></div>
                <i className="fa fa-car"></i>
                <h4 className="mt-4 mb-3 text-bl">Rent a Car</h4>
                <p>Travelling to a new city? Dont wory. We also offer anytime hassle free pick and drop to airport.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
