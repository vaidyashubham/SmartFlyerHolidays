import React, { useEffect } from 'react';
import Breadcrumb from './Breadcrumb'
import BannerImg from './BannerImg';

function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <BannerImg imgObj="assets/images/bg_about.jpg" />
            {/* <section className="inner-page-banner" id="home">
            </section> */}
            <Breadcrumb pageTitle="About Us" />
            <section className="banner-bottom py-5" id="exp">
                <div className="container py-md-5">
                    <h3 className="heading text-center mb-3 mb-sm-5">About Us</h3>
                    <div className="row mid-grids mt-lg-5 mt-3">
                        <div className="col-md-5 content-w3pvt-img">
                            <img src="assets/images/about1.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-7 content-left-bottom entry-w3ls-info text-left">
                            {/* <h5 className="mt-1">classNameIC HAIR STYLING </h5> */}
                            <h4>TO TRAVEL IS TO LIVE</h4>
                            <p className="mt-2 text-left">As I took stock of what has transpired over the years, I am extremely proud of our achievements since 2017. The future looks even more promising, promising, with plans for growth fully underway.we have successfully transitioned from a local Nagpur based one branch operation to become a respected company garnering business from across the nation whilst earning our clients trust and respect. Six simple words- “to be our customer’s only choice”- sums up our entire mission. We have resolved to providing our clients extraordinary level of customer service.</p>
                        </div>
                    </div>
                    <div className="row mid-grids mt-lg-5 mt-3 py-3">
                        <div className="col-md-7 content-left-bottom entry-w3ls-info text-left">
                            {/* <h5 className="mt-1">classNameIC BEARD STYLING</h5>
                                <h4>checkout hottest
                        <br />beard styling</h4> */}
                            <p className="mt-2 text-left">In short, we’ve given all our hallmark by which we measure our performance, and we hold ourselves, as do our clients, to the highest standard of quality. The SmartFlyer Holidays Pvt Ltd is committed to providing unparalleled service to our customers. To achieve this, one mission remains “to build successful and rewarding relationship with all of our valued customer”. We are committed to fundamental principal that the customer is not only important, but the reason for our business, and everyone at SmartFlyer Holidays Pvt Ltd genuinely work to earn and keep much-valued client trust.</p>
                        </div>
                        <div className="col-md-5 content-w3pvt-img mt-lg-0 mt-3">
                            <img src="assets/images/about2.jpg" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default About