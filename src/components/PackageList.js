// Using Class Component
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import BannerImg from './BannerImg';
import Loader from "react-loader-spinner";
import firebase from "../firebase.js";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class PackageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      packageAPIData: []
    }
  }
  componentDidMount() {
    // send HTTP request
    // save it to the state
    // fetch("https://mysterious-wildwood-48575.herokuapp.com/packages")
    //   .then(res => res.json())
    //   .then(
    //     response => {
    //       // console.log(response)
    //       this.setState({
    //         packageAPIData: response
    //       })
    //     }
    //   )

    const itemsRef = firebase.database().ref('package');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      this.setState({ packageAPIData: items });
    });
    window.scrollTo(0, 0);
  }

  render() {
    // console.log(this.state.packageAPIData)
    return (
      <div>
        <BannerImg imgObj="assets/images/bg_packageList.jpg" />
        {
          this.state.packageAPIData.length
            ?
            <div>
              <Breadcrumb pageTitle="Packages" />
              <section className="banner-bottom py-5" id="exp">
                <div className="container py-md-5">
                  <h3 className="heading text-center mb-3 mb-sm-5">Our Packages</h3>
                  <div className="row pricing-grids">
                    {
                      this.state.packageAPIData.map(packageData => {
                        return (
                          <div className="col-lg-4 mb-lg-0 mb-0" key={packageData.slug}>
                            <Link to={`/package-list/${packageData.slug}`}>
                              <div className="d-flex justify-content-center container mt-5">
                                <div className="card p-3 bg-white morphism">
                                  <div className="about-product text-center mt-2"><img src={packageData.image} alt="" width="300" height="250" />
                                    <div>
                                      <h4 className="pt-1">{packageData.title}</h4>
                                    </div>
                                  </div>
                                  <div className="stats mt-2">
                                    <div className="d-flex justify-content-between p-price text-dark"><span>Package Duration</span><span>{packageData.packageDuration}</span></div>
                                  </div>
                                  <div className="d-flex justify-content-between total font-weight-bold mt-1 text-dark"><span>Starting at only</span><span>{packageData.total}</span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        );
                      })
                    }
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
}
