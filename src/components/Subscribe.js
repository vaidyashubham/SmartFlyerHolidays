import React from 'react'

function Subscribe() {
  return (
    <section className="subscribe" id="subscribe">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 d-flex subscribe-left p-lg-5 py-sm-5 py-4">
            <div className="news-icon">
              <span className="fa fa-paper-plane" aria-hidden="true"></span>
            </div>
            <div className="text">
              <h3 className="text-center">Subscribe To Our Newsletter</h3>
            </div>
          </div>
          <div className="col-md-7 subscribe-right p-lg-5 py-sm-5 py-4">
            <MailSubscription />
            <p>We never share your email with anyone else.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
