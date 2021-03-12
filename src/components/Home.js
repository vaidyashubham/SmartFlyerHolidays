import React from 'react';
import { Link } from 'react-router-dom';
import packagesInfo from './packages/_home_packages.json';
// import { useEffect } from "react";

function Home() {
	// const data = packagesInfo.splice(0, 3);
	// console.log(data);

	const packages = packagesInfo.map(packageData => {
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


	return (
		<div>
			<div className="banner_w3lspvt" id="home">
				<div className="csslider infinity" id="slider1">
					<ul className="banner_slide_bg">
						<li>
							<div className="slider-info bg1">
								<div className="bs-slider-overlay">
									<div className="banner-text">
										<div className="container">
											<h2 className="movetxt agile-title text-capitalize">A More Rewarding Way To Travel The World.</h2>
											<p className="fs-4 font-weight-bold">Tourism. Education For The Mind & Education For The Heart.</p>
											<Link to='/contact' className="btn text-white">Contact Us</Link>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>

						</li>
						<li>

						</li>
						<li>

						</li>
					</ul>
					<div className="navigation">
						<div>
						</div>
					</div>
				</div>
			</div>
			<section className="content-info py-5" id="about">
				<div className="container py-md-5">
					<h3 className="heading text-center mb-3 mb-sm-5">Why SmartFlyer ?</h3>

					<div className="info-w3pvt-mid text-center px-lg-5">

						<div className="title-desc text-center px-lg-5">
							<img src={require('../logo.png')} alt="" className="img-fluid" />
							<p className="px-lg-5">At SmartFlyer Holidays Pvt Ltd, we offer our customers Theca-appointment of through travel schedules inside a 24 hour turnaround time. Our group of very talented staff have been prepared to comprehend customer needs and over the best choice accessible. We discount and retail our bundles and this give us the front line as far as offering our customers in the most aggressive costs. Innovation has empower us to arguments the utilisation of most recent reservations framework to give prompt input to our customers wherever conceivable. We have partners with reputable tour operators in various destination for the best rates for group and individual tour packages.</p>

							<Link to="/about" className="btn mt-lg-4 mt-3 read scroll text-white" role="button">Learn More</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="services py-5" id="services">
				<div className="container py-md-5">
					<h3 className="heading text-center mb-3 mb-sm-5">Our Services</h3>
					<div className="">

						<div className="row welcome-bottom">
							<div className="col-lg-4 col-sm-6 px-2 mb-3">
								<div className="welcome-grid text-center py-5 px-4 morphism">
									<div className="hoverEffect"></div>

									<i className="fa fa-briefcase"></i>
									<h4 className="mt-4 mb-3 text-bl">Holiday Packages</h4>
									<p>Book your holiday packages with us. We provides best holiday packages for Couples,
                Family and Friends </p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 mt-sm-0 px-2 mb-3">
								<div className="welcome-grid text-center py-5 px-4 morphism">
									<div className="hoverEffect"></div>

									<i className="fa fa-plane"></i>
									<h4 className="mt-4 mb-3 text-bl">Air Ticket</h4>
									<p>We, offering the cheapest, most affordable domestic and international flight
                ticket fares. .</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 mt-lg-0 px-2 mb-3">
								<div className="welcome-grid text-center py-5 px-4 morphism">

									<div className="hoverEffect"></div>
									<i className="fa fa-hotel"></i>
									<h4 className="mt-4 mb-3 text-bl">Hotels</h4>
									<p>Top rated Hotel Accommodation with well suited environment will be included under our packages.</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 mt-lg-0 px-2 mb-3">
								<div className="welcome-grid text-center py-5 px-4 morphism">

									<div className="hoverEffect"></div>
									<i className="fa fa-ship"></i>
									<h4 className="mt-4 mb-3 text-bl">Passport/Visa Assistance</h4>
									<p>We also provide passport and visa services to our clients on early basis.</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 px-2 mb-3">
								<div className="welcome-grid text-center py-5 px-4 morphism">

									<div className="hoverEffect"></div>
									<i className="fa fa-car"></i>
									<h4 className="mt-4 mb-3 text-bl">Car on Rent</h4>
									<p>Travelling to a new city? Dont wory. We also offer anytime hassle free pick and drop to airport.</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 px-2 mb-3">
								<div className="welcome-grid text-center py-5 px-4 morphism">

									<div className="hoverEffect"></div>
									<i className="fa fa-shopping-basket"></i>
									<h4 className="mt-4 mb-3 text-bl">All other Travel services</h4>
									<p>If you want any suggestion or services regarding your travel plan, we are always ready to
                help.</p>
								</div>
							</div>
						</div>

						{/* <div className="col-md-6 ab-content ab-content1">
								<div className="ab-content-inner">
									<Link to="/single"><img src="assets/images/services2.jpg" alt="" className="img-fluid" /></Link>
									<div className="ab-info-con">
										<h4> Trim your Hair</h4>
										<Link to="/single" className="read-more two btn m-0 px-3" role="button"><span className="fa fa-arrow-circle-o-right"> </span></Link>
									</div>
								</div>
							</div>
							<div className="col-md-6 ab-content ab-content1">
								<div className="ab-content-inner">
									<Link to="/single"><img src="assets/images/services1.jpg" alt="" className="img-fluid" /></Link>
									<div className="ab-info-con">
										<h4>Trim your Beard</h4>
										<a href="single.html" className="read-more two btn m-0 px-3"><span className="fa fa-arrow-circle-o-right"> </span></a>
									</div>
								</div>
							</div> */}
					</div>
					{/* <div className="row ab-info second mt-lg-4">
							<div className="col-md-3 ab-content">
								<div className="ab-content-inner">
									<Link to="/single"><img src="assets/images/ser3.jpg" alt="" className="img-fluid" /></Link>
									<div className="ab-info-con">
										<h4>colouring</h4>
										<a href="single.html" className="read-more two btn m-0 px-3"><span className="fa fa-arrow-circle-o-right"> </span></a>
									</div>
								</div>
							</div>
							<div className="col-md-3 ab-content">
								<div className="ab-content-inner">
									<Link to="/single"><img src="assets/images/ser4.jpg" alt="" className="img-fluid" /></Link>
									<div className="ab-info-con">
										<h4>Bathing</h4>
										<a href="single.html" className="read-more two btn m-0 px-3"><span className="fa fa-arrow-circle-o-right"> </span></a>
									</div>
								</div>
							</div>
							<div className="col-md-3 ab-content">
								<div className="ab-content-inner">
									<Link to="/single"><img src="assets/images/ser5.jpg" alt="" className="img-fluid" /></Link>
									<div className="ab-info-con">
										<h4>drying</h4>
										<a href="single.html" className="read-more two btn m-0 px-3"><span className="fa fa-arrow-circle-o-right"> </span></a>
									</div>
								</div>
							</div>
							<div className="col-md-3 ab-content">
								<div className="ab-content-inner">
									<Link to="/single"><img src="assets/images/ser6.jpg" alt="" className="img-fluid" /></Link>
									<div className="ab-info-con">
										<h4>Creams</h4>
										<a href="single.html" className="read-more two btn m-0 px-3"><span className="fa fa-arrow-circle-o-right"> </span></a>
									</div>
								</div>


							</div>
						</div> */}
				</div>
			</section>
			{/* // <!-- /services -->
 
	// <!-- pricing -->  */}
			<section className="pricing py-5">
				<div className="container py-md-5">
					<h3 className="heading text-capitalize text-center mb-3 mb-sm-3"> Place Destination</h3>
					<h3 className="tittle order text-center">
						We organize customised holiday packages , both domestic and international
							</h3>
					<div className="row pricing-grids">
						{packages}
					</div>
					<div className="title-desc text-center px-lg-5">
						<Link to="/package-list" className="btn mt-lg-4 mt-3 read scroll text-white" role="button">View More</Link>
					</div>
				</div>
			</section>

			<section className="order-sec py-5">
				<div className="container py-md-5">
					<div className="test-info text-center">
						<h3 className="tittle order">
							<span>CALL US TO BOOK An APPOINTMENT</span>Our team will call back immediately and Book the Appointment</h3>
						<h4 className="tittle my-2"> +91 9595016858</h4>

						<div className="read-more mx-auto m-0 text-center">
							<Link to="/contact" className="read-more scroll btn">Click here</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="testimonials py-5" id="testimonials">
				<div className="container py-md-5">
					<h3 className="heading text-center mb-3 mb-sm-5">Our Guests Love Us</h3>
					<div className="row mt-3">

						<div className="col-md-4 test-grid text-left px-lg-3 py-sm-5 py-md-0 py-3">
							<div className="card p-3 test-info text-center morphism">
								<p>It was a great experience visiting Assam n Meghalaya with Shreeji tours n travels. It was
								perfectly planned tour,
								customised as per requirement with good hospitality n care. I would recommend to plan ur tour with
								shreeji tours n
                  Travels. Full Paisa Vasool. Thank u Shreeji for making our trip memorable.</p>
								<div className="test-img text-center">
									<img src="assets/images/user2.png" className="img-fluid" alt="" width="70px" height="70px" />
								</div>
								<h3 className="mt-md-2 text-center">Heena Pahuja</h3>
								<div className="mobl-footer test-soc text-center">
								</div>
							</div>
						</div>
						<div className="col-md-4 test-grid text-left px-lg-3">
							<div className="card p-3 text-center test-info morphism">
								<p>We had great time traveling with SmartFlyer Holidays Pvt Ltd. I planned my first
								ever international
								trip to bali with shreeji. Its was fun and smooth. SmartFlyer Holidays Pvt Ltd were just one call away
                  for anything. Thank you for making my trip a great experience.</p>
								<div className="test-img text-center">
									<img src="assets/images/user1.png" className="img-fluid" alt="" width="70px" height="70px" />
								</div>
								<h3 className="mt-md-2 text-center">Ankita Yewale</h3>
								<div className="mobl-footer test-soc text-center">
								</div>
							</div>
						</div>
						<div className="col-md-4 test-grid text-left px-lg-3">
							<div className="card p-3 text-center test-info morphism">
								<p>It was a great experience visiting Assam n Meghalaya with Shreeji tours n travels. It was
								perfectly planned tour,
								customised as per requirement with good hospitality n care. I would recommend to plan ur tour with
								shreeji tours n
                  Travels. Full Paisa Vasool. Thank u Shreeji for making our trip memorable</p>
								<div className="test-img text-center">
									<img src="assets/images/user2.png" className="img-fluid" alt="" width="70px" height="70px" />
								</div>
								<h3 className="mt-md-2 text-center">Nebula Nairobi</h3>
								<div className="mobl-footer test-soc text-center">
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


			<section className="subscribe" id="subscribe">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-5 d-flex subscribe-left p-lg-5 py-sm-5 py-4">
							<div className="news-icon mr-3">
								<span className="fa fa-paper-plane" aria-hidden="true"></span>
							</div>
							<div className="text">
								<h3>Subscribe To Our Newsletter</h3>
							</div>
						</div>
						<div className="col-md-7 subscribe-right p-lg-5 py-sm-5 py-4">
							<form>
								<input type="email" name="email" placeholder="Enter your email here" required="" />
								<button className="btn1"><span className="fa fa-paper-plane" aria-hidden="true"></span></button>
							</form>
							<p>we never share your email with anyone else</p>
						</div>
					</div>
				</div>
			</section>

		</div>
	)
}

export default Home