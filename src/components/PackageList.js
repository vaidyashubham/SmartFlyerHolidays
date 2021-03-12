import React from 'react'
import { Link } from 'react-router-dom';
import packagesInfo from './packages/_package.json';
import { useEffect } from "react";


function PackageList() {

  // const [packageAPIData, setPackageAPIData] = useState([]);

  useEffect(() => {
    getPackage();
  }, [])

  async function getPackage() {
    try {
      const response = await fetch(`http://localhost:1337/packages`);
      const data = await response.json();
      console.log(data);
      // setPackageAPIData(data);
    } catch (err) {
      console.log(err);
    }
  }

  const packages = packagesInfo.map(packageData => {
    // console.log(packageData.slug)
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
                {/* <div className="d-flex justify-content-between p-price"><span>Pattaya, Thailand</span><span>3 Nights</span></div>
                  <div className="d-flex justify-content-between p-price"><span>Bangkok, Thailand</span><span>2 Nights</span></div> */}
              </div>
              <div className="d-flex justify-content-between total font-weight-bold mt-1 text-dark"><span>Starting at only</span><span>{packageData.total}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  // return <div className="blog">{posts}</div>;

  return (
    <div>
      <section className="inner-page-banner" id="home">
      </section>
      <div className="breadcrumb-agile">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to='/'>Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Packages</li>
        </ol>
      </div>
      <section className="banner-bottom py-5" id="exp">
        <div className="container py-md-5">
          <h3 className="heading text-center mb-3 mb-sm-5">Our Packages</h3>
          <div className="row pricing-grids">
            {packages}
            {/* <div className="col-lg-4  mb-lg-0 mb-0">
              <Link to="/bangkok-and-pataya">
                <div className="d-flex justify-content-center container mt-5">
                  <div className="card p-3 bg-white morphism">
                    <div className="about-product text-center mt-2"><img src="https://i.imgur.com/hZdZB0N.jpg" width="300" height="250" />
                      <div>
                        <h4>Bangkok and Pataya</h4>
                      </div>
                    </div>
                    <div className="stats mt-2">
                      <div className="d-flex justify-content-between p-price"><span>Package Duration</span><span>5 Nights</span></div>
                      <div className="d-flex justify-content-between p-price"><span>Pattaya, Thailand</span><span>3 Nights</span></div>
                      <div className="d-flex justify-content-between p-price"><span>Bangkok, Thailand</span><span>2 Nights</span></div>
                    </div>
                    <div className="d-flex justify-content-between total font-weight-bold mt-4"><span>Total</span><span>₹ 11300/Person*</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4  mb-lg-0 mb-0">
              <div className="">
                <div className="d-flex justify-content-center container mt-5">
                  <div className="card p-3 bg-white morphism">
                    <div className="about-product text-center mt-2"><img src="https://i.imgur.com/SKZlmM9.png" width="300" height="250" />
                      <div>
                        <h4>Dubai</h4>
                      </div>
                    </div>
                    <div className="stats mt-2">
                      <div className="d-flex justify-content-between p-price"><span>Package Duration</span><span>5 Night</span></div>
                      <div className="d-flex justify-content-between p-price"><span>Dubai, United Arab Emirates</span><span>4 Nights</span></div>
                      <div className="d-flex justify-content-between p-price"><span>Rush Inn Hotel</span><span>1 Nights</span></div>
                    </div>
                    <div className="d-flex justify-content-between total font-weight-bold mt-4"><span>Total</span><span>₹ 11300/Person*</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4  mb-lg-0 mb-0">
              <div className="">
                <div className="d-flex justify-content-center container mt-5">
                  <div className="card p-3 bg-white morphism">
                    <div className="about-product text-center mt-2"><img src="https://i.imgur.com/ZGaW52Y.jpeg" width="300" height="250" />
                      <div>
                        <h4>Singapore</h4>
                      </div>
                    </div>
                    <div className="stats mt-2">
                      <div className="d-flex justify-content-between p-price"><span>Package Duration</span><span>6 Night</span></div>
                      <div className="d-flex justify-content-between p-price"><span>Dubai, United Arab Emirates</span><span>3 Nights</span></div>
                      <div className="d-flex justify-content-between p-price"><span>Rush Inn Hotel</span><span>3 Nights</span></div>
                    </div>
                    <div className="d-flex justify-content-between total font-weight-bold mt-4"><span>Total</span><span>₹ 11300/Person*</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          {/* <div className="row pricing-grids">
            <div className="col-lg-4  mb-lg-0 mb-0">
              <div className="">
                <div className="d-flex justify-content-center container mt-5">
                  <div className="card p-3 bg-white morphism">
                    <div className="about-product text-center mt-2"><img src="https://i.imgur.com/IRuRMvy.jpg" width="300" height="250" />
                      <div>
                        <h4>Bally</h4>
                      </div>
                    </div>
                    <div className="stats mt-2">
                      <div className="d-flex justify-content-between p-price"><span>Package Duration</span><span>6 Nights</span></div>
                      <div className="d-flex justify-content-between p-price"><span>Bally, Indonesia</span><span>3 Nights</span></div>
                      <div className="d-flex justify-content-between p-price"><span>Bangkok, Thailand</span><span>3 Nights</span></div>
                    </div>
                    <div className="d-flex justify-content-between total font-weight-bold mt-4"><span>Total</span><span>₹ 11300/Person*</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4  mb-lg-0 mb-0">
              <div className="">
                <div className="d-flex justify-content-center container mt-5">
                  <div className="card p-3 bg-white morphism">
                    <div className="about-product text-center mt-2"><img src="https://i.imgur.com/picNpgx.jpeg" width="300" height="250" />
                      <div>
                        <h4>Turkey</h4>
                      </div>
                    </div>
                    <div className="stats mt-2">
                      <div className="d-flex justify-content-between p-price"><span>Package Duration</span><span>7 Night</span></div>
                      <div className="d-flex justify-content-between p-price"><span>Dubai, United Arab Emirates</span><span>4 Nights</span></div>
                      <div className="d-flex justify-content-between p-price"><span>Rush Inn Hotel</span><span>3 Nights</span></div>
                    </div>
                    <div className="d-flex justify-content-between total font-weight-bold mt-4"><span>Total</span><span>₹ 11300/Person*</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4  mb-lg-0 mb-0">
              <div className="">
                <div className="d-flex justify-content-center container mt-5">
                  <div className="card p-3 bg-white morphism">
                    <div className="about-product text-center mt-2"><img src="https://i.imgur.com/ZGaW52Y.jpeg" width="300" height="250" />
                      <div>
                        <h4>Singapore</h4>
                      </div>
                    </div>
                    <div className="stats mt-2">
                      <div className="d-flex justify-content-between p-price"><span>Package Duration</span><span>6 Night</span></div>
                      <div className="d-flex justify-content-between p-price"><span>Dubai, United Arab Emirates</span><span>3 Nights</span></div>
                      <div className="d-flex justify-content-between p-price"><span>Rush Inn Hotel</span><span>3 Nights</span></div>
                    </div>
                    <div className="d-flex justify-content-between total font-weight-bold mt-4"><span>Total</span><span>₹ 11300/Person*</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  )
}

export default PackageList
