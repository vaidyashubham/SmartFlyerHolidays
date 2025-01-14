import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {

    render() {
        return (
            <footer className="footer-content">
                <div className="layer footer">
                    <div className="container-fluid">
                        <div className="row footer-top-inner-w3ls">
                            <div className="col-lg-6 col-md-6 footer-top ">
                                <h2>
                                    <Link to='/'>SmartFlyer Holidays Pvt Ltd</Link>
                                </h2>
                                <p className="my-3">SmartFlyer Holidays Pvt Ltd is committed to providing unparalleled service to our customers.</p>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-md-0 mt-5">
                                <div className="footer-w3pvt">
                                    <h3 className="mb-3 w3pvt_title">Address</h3>
                                    <hr />
                                    <div className="last-w3ls-contact">
                                        <p>
                                            <i className="fa fa-map-marker pr-1"></i>
                                            Solitaire, Plot No 36, Block No.201, Shastri Nagar, Wardhaman Nagar, Nagpur 440008
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-lg-0 mt-5">
                                <div className="footer-w3pvt">
                                    <h3 className="mb-3 w3pvt_title">Contact Us</h3>
                                    <hr />
                                    <div className="last-w3ls-contact">
                                        <p>
                                            <i
                                                className="fa fa-envelope"></i>
                                            <a href="mailto:booking@smartflyer.co.in"> booking@smartflyer.co.in</a>
                                        </p>
                                        <p>
                                            <i
                                                className="fa fa-envelope"></i>
                                            <a href="mailto:support@smartflyer.co.in"> support@smartflyer.co.in</a>
                                        </p>
                                    </div>
                                    <div className="last-w3ls-contact my-2">
                                        <p>
                                            <i
                                                className="fa fa-phone">
                                            </i> +91 9595016858
                                        </p>
                                        <br />
                                        <p>
                                            <i
                                                className="fa fa-phone">
                                            </i> +91 9067867855
                                        </p>
                                        <br />
                                        <p>
                                            <i
                                                className="fa fa-phone">
                                            </i> +91 9067867833
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="copy-right-grids text-li text-center my-sm-4 my-4">© 2021 SmartFlyer | All Rights Reserved
                        {/* | Design & Developed by <br />
                            <a href="https://shubhamvaidya.netlify.app/"> Shubham Vaidya </a> */}
                        </p>
                        <div className="w3ls-footer text-center mt-4">
                            <ul className="list-unstyled w3ls-icons">
                                <li>
                                    <a href="/#" aria-label="Facebook">
                                        <span className="fa fa-facebook-f"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/#" aria-label="Twitter">
                                        <span className="fa fa-twitter"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/#" aria-label="Instagram">
                                        <span className="fa fa-instagram"></span>
                                    </a>
                                </li>
                                {/* <li>
                                    <a href="/#">
                                        <span className="fa fa-vk"></span>
                                    </a>
                                </li> */}
                            </ul>
                        </div>
                        {/* <div className="move-top text-right"><Link to="/" className="move-top"> <span className="fa fa-angle-up  mb-3" aria-hidden="true"></span></Link></div> */}
                    </div>
                    {/* <!-- //footer bottom --> */}
                </div>
            </footer>
        )
    }
}
export default Footer