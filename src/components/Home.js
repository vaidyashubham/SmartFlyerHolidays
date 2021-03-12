import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<div>
				<div class="banner_w3lspvt" id="home">
					<div class="csslider infinity" id="slider1">
						<input type="radio" name="slides" checked="checked" id="slides_1" />
						<input type="radio" name="slides" id="slides_2" />
						<input type="radio" name="slides" id="slides_3" />
						<input type="radio" name="slides" id="slides_4" />

						<ul class="banner_slide_bg">
							<li>
								<div class="slider-info bg1">
									<div class="bs-slider-overlay">
										<div class="banner-text">
											<div class="container">
												<h2 class="movetxt agile-title text-capitalize">A More Rewarding Way To Travel The World.</h2>
												<p className="fs-4 font-weight-bold">Tourism. Education For The Mind & Education For The Heart.</p>
												<Link to='/contact' class="btn text-white">Contact Us</Link>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li>
								{/* <div class="slider-info bg2">
									<div class="bs-slider-overlay1">
										<div class="banner-text">
											<div class="container">
												<h4 class="movetxt agile-title text-capitalize">We Help to grow your hair as well beard </h4>
												<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
												<Link to='/contact' class="btn">Get appointment</Link>
											</div>
										</div>
									</div>
								</div> */}
							</li>
							<li>
								{/* <div class="slider-info bg3">
									<div class="bs-slider-overlay1">
										<div class="banner-text">
											<div class="container">
												<h2 class="movetxt agile-title text-capitalize">We Design and Create Hair Style Latest</h2>
												<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
												<Link to='/contact' class="btn">Get appointment</Link>
											</div>
										</div>
									</div>
								</div> */}
							</li>
							<li>
								{/* <div class="slider-info bg4">
									<div class="bs-slider-overlay1">
										<div class="banner-text">
											<div class="container">
												<h4 class="movetxt agile-title text-capitalize">We design latest trending haircuts </h4>
												<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
												<Link to='/contact' class="btn">Get appointment</Link>
											</div>
										</div>
									</div>
								</div> */}
							</li>
						</ul>
						<div class="navigation">
							<div>
								{/* <label for="slides_1"></label>
								<label for="slides_2"></label>
								<label for="slides_3"></label>
								<label for="slides_4"></label> */}
							</div>
						</div>
					</div>
				</div>
				<section class="content-info py-5" id="about">
					<div class="container py-md-5">
						<h3 class="heading text-center mb-3 mb-sm-5">Why SmartFlyer ?</h3>

						<div class="info-w3pvt-mid text-center px-lg-5">

							<div class="title-desc text-center px-lg-5">
								<img src={require('../logo.png')} alt="" class="img-fluid" />
								<p class="px-lg-5">At SmartFlyer Holidays Pvt Ltd, we offer our customers Theca-appointment of through travel schedules inside a 24 hour turnaround time. Our group of very talented staff have been prepared to comprehend customer needs and over the best choice accessible. We discount and retail our bundles and this give us the front line as far as offering our customers in the most aggressive costs. Innovation has empower us to arguments the utilisation of most recent reservations framework to give prompt input to our customers wherever conceivable. We have partners with reputable tour operators in various destination for the best rates for group and individual tour packages.</p>

								<Link to="/services" class="btn mt-lg-4 mt-3 read scroll text-white" role="button">Learn More</Link>
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
				<section class="pricing py-5">
					<div class="container py-md-5">
						<h3 class="heading text-capitalize text-center mb-3 mb-sm-3"> Place Destination</h3>
						<h3 class="tittle order text-center">
							We organize customised holiday packages , both domestic and international
							</h3>
						<div class="row pricing-grids">
							<div class="col-lg-4  mb-lg-0 mb-0">
								<div class="">

									<div class="d-flex justify-content-center container mt-5">
										<div class="card p-3 bg-white morphism">
											{/* <i class="fa fa-apple"></i> */}
											<div class="about-product text-center mt-2"><img src="https://i.imgur.com/hZdZB0N.jpg" width="300" height="250" alt="" />
												<div>
													<h4>Bangkok and Pataya</h4>
													{/* <h6 class="mt-0 text-black-50">Apple pro display XDR</h6> */}
												</div>
											</div>

											<div class="stats mt-2">
												<div class="d-flex justify-content-between p-price"><span>Package Duration</span><span>5 Nights</span></div>
												<div class="d-flex justify-content-between p-price"><span>Pattaya, Thailand</span><span>3 Nights</span></div>
												<div class="d-flex justify-content-between p-price"><span>Bangkok, Thailand</span><span>2 Nights</span></div>
											</div>
											<div class="d-flex justify-content-between total font-weight-bold mt-4"><span>Total</span><span>₹ 11300/Person*</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-4  mb-lg-0 mb-0">
								<div class="">

									<div class="d-flex justify-content-center container mt-5">
										<div class="card p-3 bg-white morphism">
											{/* <i class="fa fa-apple"></i> */}
											<div class="about-product text-center mt-2"><img src="https://i.imgur.com/SKZlmM9.png" width="300" height="250" alt="" />
												<div>
													<h4>Dubai</h4>
													{/* <h6 class="mt-0 text-black-50">Apple pro display XDR</h6> */}
												</div>
											</div>
											<div class="stats mt-2">
												<div class="d-flex justify-content-between p-price"><span>Package Duration</span><span>5 Night</span></div>
												<div class="d-flex justify-content-between p-price"><span>Dubai, United Arab Emirates</span><span>4 Nights</span></div>
												<div class="d-flex justify-content-between p-price"><span>Rush Inn Hotel</span><span>1 Nights</span></div>
											</div>
											<div class="d-flex justify-content-between total font-weight-bold mt-4"><span>Total</span><span>₹ 11300/Person*</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-4  mb-lg-0 mb-0">
								<div class="">
									<div class="d-flex justify-content-center container mt-5">
										<div class="card p-3 bg-white morphism">
											{/* <i class="fa fa-apple"></i> */}
											<div class="about-product text-center mt-2"><img src="https://i.imgur.com/ZGaW52Y.jpeg" width="300" height="250" alt="" />
												<div>
													<h4>Singapore</h4>
													{/* <h6 class="mt-0 text-black-50">Apple pro display XDR</h6> */}
												</div>
											</div>
											<div class="stats mt-2">
												<div class="d-flex justify-content-between p-price"><span>Package Duration</span><span>6 Night</span></div>
												<div class="d-flex justify-content-between p-price"><span>Dubai, United Arab Emirates</span><span>3 Nights</span></div>
												<div class="d-flex justify-content-between p-price"><span>Rush Inn Hotel</span><span>3 Nights</span></div>
											</div>
											<div class="d-flex justify-content-between total font-weight-bold mt-4"><span>Total</span><span>₹ 11300/Person*</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="title-desc text-center px-lg-5">
							<Link to="/packages" class="btn mt-lg-4 mt-3 read scroll text-white" role="button">View More</Link>
						</div>
					</div>
				</section>

				<section class="order-sec py-5">
					<div class="container py-md-5">
						<div class="test-info text-center">
							<h3 class="tittle order">
								<span>CALL US TO BOOK An APPOINTMENT</span>Our team will call back immediately and Book the Appointment</h3>
							<h4 class="tittle my-2"> +91 9595016858</h4>

							<div class="read-more mx-auto m-0 text-center">
								<Link to="/contact" class="read-more scroll btn">Click here</Link>
							</div>
						</div>
					</div>
				</section>

				<section class="testimonials py-5" id="testimonials">
					<div class="container py-md-5">
						<h3 class="heading text-center mb-3 mb-sm-5">Our Guests Love Us</h3>
						<div class="row mt-3">

							<div class="col-md-4 test-grid text-left px-lg-3 py-sm-5 py-md-0 py-3">
								<div class="card p-3 test-info text-center morphism">
									<p>It was a great experience visiting Assam n Meghalaya with Shreeji tours n travels. It was
									perfectly planned tour,
									customised as per requirement with good hospitality n care. I would recommend to plan ur tour with
									shreeji tours n
                  Travels. Full Paisa Vasool. Thank u Shreeji for making our trip memorable.</p>
									<div class="test-img text-center">
										<img src="assets/images/user2.png" class="img-fluid" alt="" width="70px" height="70px" />
									</div>
									<h3 class="mt-md-2 text-center">Heena Pahuja</h3>
									<div class="mobl-footer test-soc text-center">
									</div>
								</div>
							</div>
							<div class="col-md-4 test-grid text-left px-lg-3">
								<div class="card p-3 text-center test-info morphism">
									<p>We had great time traveling with SmartFlyer Holidays Pvt Ltd. I planned my first
									ever international
									trip to bali with shreeji. Its was fun and smooth. SmartFlyer Holidays Pvt Ltd were just one call away
                  for anything. Thank you for making my trip a great experience.</p>
									<div class="test-img text-center">
										<img src="assets/images/user1.png" class="img-fluid" alt="" width="70px" height="70px" />
									</div>
									<h3 class="mt-md-2 text-center">Ankita Yewale</h3>
									<div class="mobl-footer test-soc text-center">
									</div>
								</div>
							</div>
							<div class="col-md-4 test-grid text-left px-lg-3">
								<div class="card p-3 text-center test-info morphism">
									<p>It was a great experience visiting Assam n Meghalaya with Shreeji tours n travels. It was
									perfectly planned tour,
									customised as per requirement with good hospitality n care. I would recommend to plan ur tour with
									shreeji tours n
                  Travels. Full Paisa Vasool. Thank u Shreeji for making our trip memorable</p>
									<div class="test-img text-center">
										<img src="assets/images/test3.jpg" class="img-fluid" alt="" width="70px" height="70px" />
									</div>
									<h3 class="mt-md-2 text-center">Nebula Nairobi</h3>
									<div class="mobl-footer test-soc text-center">
									</div>
								</div>
							</div>
						</div>


					</div>
				</section>


				<section class="subscribe" id="subscribe">
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-5 d-flex subscribe-left p-lg-5 py-sm-5 py-4">
								<div class="news-icon mr-3">
									<span class="fa fa-paper-plane" aria-hidden="true"></span>
								</div>
								<div class="text">
									<h3>Subscribe To Our Newsletter</h3>
								</div>
							</div>
							<div class="col-md-7 subscribe-right p-lg-5 py-sm-5 py-4">
								<form>
									<input type="email" name="email" placeholder="Enter your email here" required="" />
									<button class="btn1"><span class="fa fa-paper-plane" aria-hidden="true"></span></button>
								</form>
								<p>we never share your email with anyone else</p>
							</div>
						</div>
					</div>
				</section>

			</div>
		)
	}
}
export default Home