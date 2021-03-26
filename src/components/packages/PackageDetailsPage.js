import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Loader from "react-loader-spinner";
import BannerImg from '../BannerImg';
import firebase from "../../firebase.js";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function PackageDetailsPage() {

  const [packageAPIData, setPackageAPIData] = useState([]);

  useEffect(() => {
    // getPackage();
    const itemsRef = firebase.database().ref('package');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let results = items.filter(function (entry) { return entry.slug === slug; });
      setPackageAPIData(results[0]);
    });
    window.scrollTo(0, 0);
  },[])

  let { slug } = useParams();

  // async function getPackage() {
  //   const response = await fetch(`https://mysterious-wildwood-48575.herokuapp.com/packages`);
  //   const data = await response.json();
  //   var results = data.filter(function (entry) { return entry.packageDetails.slug === slug; });
  //   setPackageAPIData(results[0]);
  // }

  // console.log(packageAPIData);
  let inclusionItems;
  let packageImages;
  // let iternaryIncluded;
  let iternaryData;

  if (packageAPIData) {
    const { iternary, inclusion, photos } = packageAPIData;

    inclusionItems = inclusion && inclusion.map(item => {
      return (
        <div key={item}>
          <span className="badge" >{item}</span>
        </div>
      )
    })

    packageImages = photos && photos.map(item => {
      return (
        <div key={item}>
          <img src={item} alt="" />
        </div>
      )
    })

    iternaryData = iternary && iternary.map(item => {
      // console.log(item)
      return (
        <div className="each-day" key={item.dayNo}>
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
                  item.included && item.included.map(item => {
                    return <span className="badge badge-primary" key={item}>{item}</span>
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
      <BannerImg imgObj={packageAPIData && packageAPIData.image} />
      {
        packageAPIData
          ?
          <div>

            <div className="breadcrumb-agile">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to='/'>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page"><Link to='/package-list'>Packages</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{packageAPIData.title}</li>
              </ol>
            </div>
            <section className="what-we-do py-5">
              <div className="container py-md-5">
                <h3 className="heading text-center mb-3 mb-sm-5">{packageAPIData.title}</h3>
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
                              <span className="packageName"> {`${packageAPIData.title} Package Details`}</span>
                            </h3>
                          </div>
                          <p className="">
                            <b>Destinations & Night Stays ( Kindly refer to the below itinerary for details. )</b>
                            <br />
                      Arrival At : {packageAPIData.arrivalAt}
                            <br />
                            {packageAPIData.stay1}
                            <br />
                            {packageAPIData.stay2}
                            <br />
                  Departure From: {packageAPIData.departureFrom}
                            <br />
                  Package Duration: {packageAPIData.packageDuration}
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
            timeout={5000} //3 secs
          />
      }
    </div >
  )
}

