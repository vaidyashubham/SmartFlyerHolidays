import React from 'react'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import BannerImg from './BannerImg';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function PackageListPage() {
  const [packageAPIData, setPackageAPIData] = useState([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    getPackage();
  }, [])

  

  async function getPackage() {
    const response = await fetch(`https://mysterious-wildwood-48575.herokuapp.com/packages`);
    const data = await response.json();
    // console.log(data);
    setPackageAPIData(data);
  }

  const packages = packageAPIData.map(packageData => {
    return (
      <div className="col-lg-4 mb-lg-0 mb-0" key={packageData.packageDetails.slug}>
        <Link to={`/package-list/${packageData.packageDetails.slug}`}>
          <div className="d-flex justify-content-center container mt-5">
            <div className="card p-3 bg-white morphism">
              <div className="about-product text-center mt-2"><img src={packageData.packageDetails.image} alt="" width="300" height="250" />
                <div>
                  <h4 className="pt-1">{packageData.packageDetails.title}</h4>
                </div>
              </div>
              <div className="stats mt-2">
                <div className="d-flex justify-content-between p-price text-dark"><span>Package Duration</span><span>{packageData.packageDetails.packageDuration}</span></div>
                {/* <div className="d-flex justify-content-between p-price"><span>Pattaya, Thailand</span><span>3 Nights</span></div>
                  <div className="d-flex justify-content-between p-price"><span>Bangkok, Thailand</span><span>2 Nights</span></div> */}
              </div>
              <div className="d-flex justify-content-between total font-weight-bold mt-1 text-dark"><span>Starting at only</span><span>{packageData.packageDetails.total}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div>
      <BannerImg imgObj="assets/images/bg_packageList.jpg" />
      {
        packageAPIData.length
          ?
          <div>
            <Breadcrumb pageTitle="Packages" />
            <section className="banner-bottom py-5" id="exp">
              <div className="container py-md-5">
                <h3 className="heading text-center mb-3 mb-sm-5">Our Packages</h3>
                <div className="row pricing-grids">
                  {packages}
                </div>
              </div>
            </section>
          </div>
          :
          <Loader
            type="ThreeDots"
            color="#f25c54"
            height={100}
            width={100}
            className="text-center py-3"
            timeout={5000} //3 secs
          />
      }
    </div>
  )
}

export default PackageListPage
