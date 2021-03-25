// Using Class Component

import React, { Component } from 'react'
import Breadcrumb from './Breadcrumb';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import BannerImg from './BannerImg';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }
  componentDidMount() {
    // send HTTP request
    // save it to the state
    fetch("https://mysterious-wildwood-48575.herokuapp.com/galleries")
      .then(res => res.json())
      .then(
        response => {
          // console.log(response[0].photos)
          this.setState({
            photos: response[0].photos
          })
        }
      )
  }

  

  render() {
    // console.log(this.state.photos)
    return (
      <div>
        <BannerImg imgObj="assets/images/bg_gallery.jpg" />
        {
          this.state.photos.length
            ?
            <div>
              <Breadcrumb pageTitle="Gallery" />
              <section className="gallery py-5" id="gallery">
                <div className="container py-md-5">
                  <h3 className="heading text-center mb-3 mb-sm-5">Our Gallery</h3>
                  <div className="gallery-content">
                    <div className="row">
                      {
                        this.state.photos.map(img => {
                          return (
                            <div className="col-md-4 col-sm-6 gal-img" key={img.id}>
                              <a href={`#${img.id}`} >
                                <img src={`${img.url}`} alt="aegis" className="img-fluid-1 mt-4" />
                              </a>
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

