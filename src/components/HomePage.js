import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Services from './Services';
import HomePackages from './HomePackages';
import BookAppointment from './BookAppointment';
import HomeAbout from './HomeAbout';
import HomeBanner from './HomeBanner';
import firebase from "../firebase.js";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function HomePage() {

	const [packageAPIData, setPackageAPIData] = useState([]);

	useEffect(() => {
		window.scrollTo(0, 0);
		getPackage();

	}, [])

	async function getPackage() {
		const itemsRef = firebase.database().ref('package');
		itemsRef.on('value', (snapshot) => {
			let items = snapshot.val();
			// console.log(items);
			setPackageAPIData(items.splice(0, 3));
		});
	}

	// async function getPackage() {
	// 	const response = await fetch(`https://mysterious-wildwood-48575.herokuapp.com/packages`);
	// 	const data = await response.json();
	// 	// console.log(data);
	// 	setPackageAPIData(data.splice(0, 3));
	// }

	const packages = packageAPIData.map(packageData => {
		return (
			<div className="col-lg-4 mb-lg-0 mb-0" key={packageData.slug}>
				<Link to={`/package-list/${packageData.slug}`}>
					<div className="d-flex justify-content-center container mt-5">
						<div className="card p-3 bg-white morphism">
							<div className="about-product text-center mt-2">
								<LazyLoadImage
									effect="blur"
									src={packageData.image}
									width="300"
									height="250"
								/>
								{/* <img src={packageData.image} alt="" width="300" height="250" /> */}
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
			<HomeBanner />
			<HomeAbout />
			<Services />
			<HomePackages packages={packages} />
			<BookAppointment />
		</div >
	)
}

export default HomePage