import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div>
      <section className="inner-page-banner" id="home">
      </section>
      <div className="container py-md-5">
        <h3 className="heading text-center mb-3 mb-sm-5">Oops! 404 Not Found</h3>
        <h5 className="text-center">
          Sorry, an error has occured, Requested page not found!
        </h5>
        <div className="text-center">
          {/* <a href="http://www.jquery2dotnet.com" className="btn btn-primary btn-lg">
            <span className="glyphicon glyphicon-home"></span>
                        </a> */}
          {/* <a href="http://www.jquery2dotnet.com" className="btn btn-default btn-lg">
            <span className="glyphicon glyphicon-envelope"></span>  </a> */}
          <div className="title-desc text-center px-lg-5">
            <Link to="/" className="btn mt-lg-4 mt-3 read scroll text-white mr-3" role="button">Take Me Home</Link>
            <Link to="/contact" className="btn mt-lg-4 mt-3 read scroll text-white" role="button">Contact Support</Link>
          </div>
        </div>
      </div>
    </div>
    // <div className="container">
    //   <div className="row">
    //     <div className="col-md-12">
    //       <div className="error-template">
    //         <h1>
    //           Oops!</h1>
    //         <h2>
    //           404 Not Found</h2>
    //         <div className="error-details">
    //           Sorry, an error has occured, Requested page not found!
    //             </div>
    //         <div className="error-actions">
    //           <a href="http://www.jquery2dotnet.com" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
    //                     Take Me Home </a><a href="http://www.jquery2dotnet.com" className="btn btn-default btn-lg"><span className="glyphicon glyphicon-envelope"></span> Contact Support </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

  )
}

export default PageNotFound
