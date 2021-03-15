import React from 'react';
import { Link } from 'react-router-dom';
import packagesInfo from './packages/_home_packages.json';
import { useEffect } from "react";
import Services from './Services';
// import MailSubscription from './MailSubscription'
// import Testimonials from './Testimonials';

function Home() {
	// const data = packagesInfo.splice(0, 3);
	// console.log(data);

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

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

			<Services />

			<section className="pricing py-5">
				<div className="container py-md-5">
					<h3 className="heading text-capitalize text-center mb-3 mb-sm-3"> Place Destination</h3>
					<h3 className="tittle order text-center">
						We organize customised holiday packages, both domestic and international
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

			{/* <Testimonials /> */}

			{/* <section className="subscribe" id="subscribe">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-5 d-flex subscribe-left p-lg-5 py-sm-5 py-4">
							<div className="news-icon">
								<span className="fa fa-paper-plane" aria-hidden="true"></span>
							</div>
							<div className="text">
								<h3 className="text-center">Subscribe To Our Newsletter</h3>
							</div>
						</div>
						<div className="col-md-7 subscribe-right p-lg-5 py-sm-5 py-4">
							<MailSubscription />
							<p>We never share your email with anyone else.</p>
						</div>
					</div>
				</div>
			</section> */}

		</div >
	)
}

export default Home