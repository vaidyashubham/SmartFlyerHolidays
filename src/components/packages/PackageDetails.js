import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import packagesInfo from './_package.json';
import { Link } from 'react-router-dom';

export default function packageDetails() {

  const [packageAPIData, setPackageAPIData] = useState([]);

  useEffect(() => {
    getPackage();
  }, [])

  async function getPackage() {
    try {
      const response = await fetch(`http://localhost:1337/packages`);
      const data = await response.json();
      // console.log(data[0].packageDetails);
      setPackageAPIData(data[0].packageDetails);
    } catch (err) {
      console.log(err);
    }
  }

  console.log(packageAPIData)

  function findPackageBySlug(slug) {
    return packagesInfo.find(o => o.slug === slug);
  }

  let { slug } = useParams();
  const packageData = findPackageBySlug(slug);
  // console.log(packageData);

  const { iternary, inclusion, photos } = packageData;
  // console.log(iternary)
  // console.log(inclusion)
  // console.log(photos)

  let inclusionItems = inclusion.map(item => {
    return (
      <div>
        <span className="badge">{item}</span>
      </div>
    )
  })

  let packageImages = photos.map(item => {
    return (
      <div>
        <img src={item} alt="" />
      </div>
    )
  })

  let iternaryIncluded = iternary.map(item => {
    return (
      item.included.map(item => {
        return <span className="badge badge-primary">{item}</span>
      })
    )
  })

  let iternaryData = iternary.map(item => {
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

  return (
    <div>
      <section className="inner-page-banner" id="home">
      </section>
      <div className="breadcrumb-agile">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to='/'>Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page"><Link to='/package-list'>Packages</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{packageData.title}</li>
        </ol>
      </div>
      <section className="what-we-do py-5">
        <div className="container py-md-5">
          <h3 className="heading text-center mb-3 mb-sm-5">{packageData.title}</h3>
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
                        <span className="packageName"> {`${packageData.title} Package Details`}</span>
                      </h3>
                    </div>
                    <p className="">
                      <b>Destinations & Night Stays ( Kindly refer to the below itinerary for details. )</b>
                      <br />
                      Arrival At : {packageData.arrivalAt}
                      <br />
                      {packageData.stay1}
                      <br />
                      {packageData.stay2}
                      <br />
                  Departure From: {packageData.departureFrom}
                      <br />
                  Package Duration: {packageData.packageDuration}
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
  )
}

