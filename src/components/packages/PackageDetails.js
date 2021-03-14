import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Loader from "react-loader-spinner";
import BannerImg from '../BannerImg';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function PackageDetails() {

  const [packageAPIData, setPackageAPIData] = useState([]);

  useEffect(() => {
    getPackage();
    // window.scrollTo(0, 0)
  })

  let { slug } = useParams();

  async function getPackage() {
    const response = await fetch(`https://mysterious-wildwood-48575.herokuapp.com/packages`);
    const data = await response.json();
    var results = data.filter(function (entry) { return entry.packageDetails.slug === slug; });
    setPackageAPIData(results[0]);
  }

  console.log(packageAPIData.packageDetails);
  let inclusionItems;
  let packageImages;
  // let iternaryIncluded;
  let iternaryData;

  if (packageAPIData.packageDetails) {
    const { iternary, inclusion, photos } = packageAPIData.packageDetails;

    inclusionItems = inclusion && inclusion.map(item => {
      return (
        <div>
          <span className="badge">{item}</span>
        </div>
      )
    })

    packageImages = photos && photos.map(item => {
      return (
        <div>
          <img src={item} alt="" />
        </div>
      )
    })

    // iternaryIncluded = iternary && iternary.map(item => {
    //   return (
    //     item.included.map(item => {
    //       return <span className="badge badge-primary">{item}</span>
    //     })
    //   )
    // })

    iternaryData = iternary && iternary.map(item => {
      return (
        <div className="each-day">
          <div className="day-title">
            <div className="row">
              <div className="col-md-3 col-12">
                <p><b> {item.dayNo} </b></p>
              </div>
              <div className="col-md-5 col-12">
                <p className="day-description">{item.place}</p>
              </div>
              <div className="col-md-4 col-12">
                <p className="pull-right"> {item.stay}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="day-img-wrapper">
                <img src={item.img} width="100%" alt="" />
              </div>
            </div>
            <div className="col-md-9">
              <div className="day-detail">
                <p>{item.description}</p>
                {
                  item.included.map(item => {
                    return <span className="badge badge-primary">{item}</span>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div>

      { packageAPIData.packageDetails
        ?
        <div>
          <BannerImg imgObj={packageAPIData.packageDetails.image} />
          <div className="breadcrumb-agile">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to='/'>Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page"><Link to='/package-list'>Packages</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{packageAPIData.packageDetails.title}</li>
            </ol>
          </div>
          <section className="what-we-do py-5">
            <div className="container py-md-5">
              <h3 className="heading text-center mb-3 mb-sm-5">{packageAPIData.packageDetails.title}</h3>
              <div className="package-wrapper py-5">
                <div className="row">
                  <div className="">
                    <div className="nav-tab">
                      <ul>
                        <li><a href="#package-detail">Details</a></li>
                        <li><a href="#package-itinerary">Itinerary</a></li>
                        <li><a href="#package-images"> Photos</a></li>
                      </ul>
                    </div>
                    <div className="package-content">
                      <div className="package-detail theme-card" id="package-detail">
                        <div className="package-title">
                          <h3>
                            <span className="packageName"> {`${packageAPIData.packageDetails.title} Package Details`}</span>
                          </h3>
                        </div>
                        <p className="">
                          <b>Destinations & Night Stays ( Kindly refer to the below itinerary for details. )</b>
                          <br />
                      Arrival At : {packageAPIData.packageDetails.arrivalAt}
                          <br />
                          {packageAPIData.packageDetails.stay1}
                          <br />
                          {packageAPIData.packageDetails.stay2}
                          <br />
                  Departure From: {packageAPIData.packageDetails.departureFrom}
                          <br />
                  Package Duration: {packageAPIData.packageDetails.packageDuration}
                          <br />
                  Inclusion:
                    </p>
                        <div className="package-duration">
                        </div>
                        <div className="amenity-section">
                          <div className="row">
                            {inclusionItems}
                          </div>
                        </div>
                        <p className="description"><br /><b>₹ 11300/Person*</b></p>
                      </div>
                      <div className="package-itinerary theme-card" id="package-itinerary">
                        <div className="package-title">
                          <h3>Itinerary</h3>
                        </div>
                        {iternaryData}
                      </div>
                      <div className="note">
                        <p>Flight, Package, and Hotels Fares are subject to availability.</p>
                      </div>
                      <div className="package-images theme-card" id="package-images">
                        <div className="package-title">
                          <h3>Photos</h3>
                        </div>
                        <div className="img-wrapper">
                          {packageImages}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
          timeout={3000} //3 secs
        />
      }
    </div>
  )
}

