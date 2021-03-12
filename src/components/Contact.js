import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component {
    render() {
        return (
            <div>
                <section class="inner-page-banner" id="home">
                </section>
                <div class="breadcrumb-agile">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item">
                            <Link to='/'>Home</Link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
                    </ol>
                </div>

                {/* <section class="content-info py-5">
                    <div class="container py-md-5">
                        <div class="text-center px-lg-5">
                            <h3 class="heading text-center mb-3 mb-sm-5">Contact Us</h3>
                            <div class="title-desc text-center px-lg-5">
                                <p class="px-lg-5 sub-wthree">Praesent ullamcorper dui turpis.At vero eos et accusam et justo duo dolores et ea rebum.Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.
                        Praesent ullamcorper dui turpis.</p>
                            </div>
                        </div>
                        <div class="contact-w3pvt-form mt-5">
                            <form action="#" class="w3layouts-contact-fm" method="post">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label>First Name</label>
                                            <input class="form-control" type="text" name="Name" placeholder="" required="" />
                                        </div>
                                        <div class="form-group">
                                            <label>Last Name</label>
                                            <input class="form-control" type="text" name="Name" placeholder="" required="" />
                                        </div>
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input class="form-control" type="email" name="Email" placeholder="" required="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label>Write Message</label>
                                            <textarea class="form-control" name="Message" placeholder="" required=""></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto mt-3">
                                        <button type="submit" class="btn submit">Submit</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </section> */}

                <section class="contact py-5 bg-li" id="contact">
                    <div class="container py-xl-5 py-lg-3">
                        <h3 className="heading text-center mb-3 mb-sm-5">Contact Us</h3>
                        {/* <h3 class="text-center font-weight-bold title">Contact Us</h3> */}
                        <p class="sub-tittle text-center mt-2 mb-sm-5 mb-4 pb-xl-3"></p>

                        <div class="contact1">
                            <div class="container-contact1">
                                <div class="contact1-pic js-tilt" data-tilt>
                                    <img src={require('../contact_img.png')} alt="IMG" />
                                </div>

                                <form class="contact1-form validate-form">
                                    <span class="contact1-form-title">
                                        Get in touch
            </span>

                                    <div class="wrap-input1 validate-input" data-validate="Name is required">
                                        <input class="input1" type="text" name="name" placeholder="Name" />
                                        <span class="shadow-input1"></span>
                                    </div>

                                    <div class="wrap-input1 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                        <input class="input1" type="text" name="email" placeholder="Email" />
                                        <span class="shadow-input1"></span>
                                    </div>

                                    <div class="wrap-input1 validate-input" data-validate="Subject is required">
                                        <input class="input1" type="text" name="subject" placeholder="Subject" />
                                        <span class="shadow-input1"></span>
                                    </div>

                                    <div class="wrap-input1 validate-input" data-validate="Message is required">
                                        <textarea class="input1" name="message" placeholder="Message"></textarea>
                                        <span class="shadow-input1"></span>
                                    </div>

                                    <div class="container-contact1-form-btn">
                                        <button class="contact1-form-btn">
                                            <span>
                                                Send Email
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </section>

                <div class="map-w3layouts">
                    <iframe title="test" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27404345275!2d-118.69191921441556!3d34.02016130939095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos+Angeles%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1522474296007" allowfullscreen=""></iframe>
                </div>
            </div>
        )
    }
}
export default Contact