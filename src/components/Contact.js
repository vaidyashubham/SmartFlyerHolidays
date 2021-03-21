import React, { useEffect } from 'react';
import ContactForm from './ContactFormNetlify';
import Map from './Map';
import Breadcrumb from './Breadcrumb'
import BannerImg from './BannerImg';

function Contact() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            {/* <section className="inner-page-banner" id="home">
            </section> */}
            <BannerImg imgObj="assets/images/bg_contact.jpg" />
            <Breadcrumb pageTitle="Contact Us" />
            <section className="contact py-5 bg-li" id="contact">
                <div className="container py-xl-5 py-lg-3">
                    <h3 className="heading text-center mb-3 mb-sm-5">Contact Us</h3>
                    <p className="sub-tittle text-center mt-2 mb-sm-5 mb-4 pb-xl-3"></p>
                    <div className="contact1">
                        <div className="container-contact1">
                            <div className="contact1-pic js-tilt" data-tilt>
                                <img src={require('../contact_img.png')} alt="IMG" />
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
            <Map />
        </div>
    )

}
export default Contact