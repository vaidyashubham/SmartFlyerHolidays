// Using Class Component

import React, { Component } from 'react'
import Breadcrumb from './Breadcrumb';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import BannerImg from './BannerImg';
import firebase from "../firebase.js";

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      isLoading: true
    }
  }
  componentDidMount() {
    // send HTTP request
    // save it to the state
    // fetch("https://mysterious-wildwood-48575.herokuapp.com/galleries")
    //   .then(res => res.json())
    //   .then(
    //     response => {
    //       // console.log(response[0].photos)
    //       this.setState({
    //         photos: response[0].photos
    //       })
    //     }
    //   )

    var storageRef = firebase.storage().ref("images");
    let temp = [];
    storageRef.listAll().then(function (result) {
      let path = storageRef.fullPath
      path = path.replace(/\b\/\b(?!.*?\b\/\b)/, "%2F");
      result.items.forEach(fileRef => {
        temp.push({
          name: fileRef.name,
          url: path + "%2F" + fileRef.name + "?alt=media"
        })
      });
    }).then(() => {
      this.setState({
        images: temp
      })
    }).catch(error => {
      console.log(error);
    })
  }

  onLoad = () => {
    // delay for demo only
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 1000);

    // setIsLoading(false)
  }

  render() {
    // console.log(this.state.images)
    return (
      <div>
        <BannerImg imgObj="assets/images/bg_gallery.jpg" />
        {
          this.state.images.length
            ?
            <div>
              <Breadcrumb pageTitle="Gallery" />
              <section className="gallery py-5" id="gallery">
                <div className="container py-md-5">
                  <h3 className="heading text-center mb-3 mb-sm-5">Our Gallery</h3>
                  <div className="gallery-content">
                    <div className="row">
                      {
                        this.state.images.map(img => {
                          return (
                            <div className="col-md-4 col-sm-6 gal-img" key={img.name}>
                              <img
                                alt=""
                                className="img-fluid-1 mt-4 morphism"
                                src="https://flevix.com/wp-content/uploads/2019/07/Comp-2.gif"
                                style={{ display: this.state.isLoading ? "block" : "none" }}
                              />
                              <img
                                src={`https://firebasestorage.googleapis.com/v0/b/smartflyerholidays-a147c.appspot.com/o/${img.url}&token=72cde219-3290-4ad9-8c81-56d65c822d75`}
                                alt=""
                                className="img-fluid-1 mt-4"
                                style={{ display: this.state.isLoading ? "none" : "block" }}
                                onLoad={this.onLoad}
                              />
                            </div>
                          )
                        })
                      }
                    </div>
                    <div>
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
      </div>
    )
  }
}

