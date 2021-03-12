import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<header>
				<div className="container">
					<div className="header d-lg-flex justify-content-between align-items-center">
						<div className="header-agile">
							<h1>
								<Link to='/' className="navbar-brand logo">
									<img src={require('../../logo.png')} alt="" className="logo" />
								</Link>
							</h1>
						</div>
						<div className="nav_w3ls">
							<nav>
								<label htmlFor="drop" className="toggle mt-lg-0 mt-1"><span className="fa fa-bars" aria-hidden="true"></span></label>
								<input type="checkbox" id="drop" />
								<ul className="menu">
									<li className="mr-lg-3 mr-2">
										<NavLink to='/' exact activeClassName="navbar__link--active"
											className="navbar__link" >Home</NavLink>
									</li>
									<li className="mr-lg-3 mr-2">
										<NavLink exact to='/about' activeClassName="navbar__link--active"
											className="navbar__link" >About</NavLink></li>
									<li className="mr-lg-3 mr-2">
										<NavLink exact to='/gallery' activeClassName="navbar__link--active"
											className="navbar__link">Gallery</NavLink></li>
									<li className="mr-lg-3 mr-2">
										<NavLink exact to='/package-list' activeClassName="navbar__link--active"
											className="navbar__link" >Packages</NavLink>
									</li>
									<li className="mr-lg-3 mr-2">
										<NavLink exact to='/contact' activeClassName="navbar__link--active"
											className="navbar__link" >Contact Us</NavLink>
									</li>
								</ul>
							</nav>
						</div>

					</div>
				</div>
			</header>
		)
	}
}
export default Navbar