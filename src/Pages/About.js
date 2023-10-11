import React from 'react'
import Navbar from '../Components/Navbar'
import { useEffect } from 'react'
import Footer from '../Components/Footer'
function About() {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <div class="container-xxl bg-white p-0">

            <div className="container-xxl position-relative p-0">
                <Navbar ActiveTab={2} />
                <div className="container-xxl py-5 bg-primary hero-header">
                    <div className="container my-5 py-5 px-lg-5">
                        <div className="row g-5 py-5">
                            <div className="col-12 text-center">
                                <h1 className="text-white animated slideInDown">About Us</h1>
                                <hr className="bg-white mx-auto mt-0" style={{ width: '90px' }} />
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item">
                                            <a className="text-white" href="#">
                                                Home
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a className="text-white" href="#">
                                                Pages
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item text-white active" aria-current="page">
                                            About
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container py-5 px-lg-5">
                    <div className="row g-4">
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="feature-item bg-light rounded text-center p-4">
                                <i className="fa fa-3x fa-laptop-code text-primary mb-4"></i>
                                <h5 className="mb-3">Design & Development</h5>
                                <p className="m-0">Unlocking Digital Excellence: Where Design Meets Development to Transform Your Ideas into Stunning Apps and Websites, Amplifying Business Success and Crafting Innovative Platforms for All.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="feature-item bg-light rounded text-center p-4">
                                <i className="fa fa-3x fa-search text-primary mb-4"></i>
                                <h5 className="mb-3">SEO & Backlinks</h5>
                                <p className="m-0">Elevate Your Visibility and Authority: Masterful SEO and Backlinks Strategies to Propel Your Website to the Top of Search Engines and Dominate the Online Landscape.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="feature-item bg-light rounded text-center p-4">
                                <i className="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                                <h5 className="mb-3">Digital Marketing</h5>
                                <p className="m-0">Catalyze Your Triumph: Unleash the Power of Digital Marketing to Fuel Your Business's Expansion, Captivate Your Audience, and Uncover Untapped Potential in the Online Realm.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container py-5 px-lg-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <p className="section-title text-secondary">
                                About Us<span></span>
                            </p>
                            <h1 className="mb-5">
                                #1 Digital solution with 10 years of experience
                            </h1>
                            <p className="mb-4">
                                Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
                                labore. Clita erat ipsum et lorem et sit, sed stet no labore
                                lorem sit clita duo justo eirmod magna dolore erat amet
                            </p>
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <p className="mb-2">Digital Marketing</p>
                                    <p className="mb-2">85%</p>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-primary"
                                        role="progressbar"
                                        aria-valuenow="85"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <p className="mb-2">SEO & Backlinks</p>
                                    <p className="mb-2">90%</p>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-secondary"
                                        role="progressbar"
                                        aria-valuenow="90"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <p className="mb-2">Design & Development</p>
                                    <p className="mb-2">95%</p>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-dark"
                                        role="progressbar"
                                        aria-valuenow="95"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                            <a
                                href=""
                                className="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3"
                            >
                                Read More
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <img
                                className="img-fluid wow zoomIn"
                                data-wow-delay="0.5s"
                                src="asests/img/about.png" // You may need to adjust the image source
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl bg-primary fact py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5 px-lg-5">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                            <i className="fa fa-certificate fa-3x text-secondary mb-3"></i>
                            <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                            <p className="text-white mb-0">Years Experience</p>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                            <i className="fa fa-users-cog fa-3x text-secondary mb-3"></i>
                            <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                            <p className="text-white mb-0">Team Members</p>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                            <i className="fa fa-users fa-3x text-secondary mb-3"></i>
                            <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                            <p className="text-white mb-0">Satisfied Clients</p>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                            <i className="fa fa-check fa-3x text-secondary mb-3"></i>
                            <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                            <p className="text-white mb-0">Completed Projects</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container py-5 px-lg-5">
                    <div className="wow fadeInUp" data-wow-delay="0.1s">
                        <p className="section-title text-secondary justify-content-center">
                            <span></span>Our Team<span></span>
                        </p>
                        <h1 className="text-center mb-5">Our Team Members</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item bg-light rounded">
                                <div className="text-center border-bottom p-4">
                                    <img
                                        className="img-fluid rounded-circle mb-4"
                                        src="assets/img/team-1.jpg"
                                        alt=""
                                    />
                                    <h5>John Doe</h5>
                                    <span>CEO & Founder</span>
                                </div>
                                <div className="d-flex justify-content-center p-4">
                                    <a className="btn btn-square mx-1" href="">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="btn btn-square mx-1" href="">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="btn btn-square mx-1" href="">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a className="btn btn-square mx-1" href="">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item bg-light rounded">
                                <div className="text-center border-bottom p-4">
                                    <img
                                        className="img-fluid rounded-circle mb-4"
                                        src="assets/img/team-2.jpg"
                                        alt=""
                                    />
                                    <h5>Jessica Brown</h5>
                                    <span>Web Designer</span>
                                </div>
                                <div className="d-flex justify-content-center p-4">
                                    <a className="btn btn-square mx-1" href="">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="btn btn-square mx-1" href="">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="btn btn-square mx-1" href="">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a className="btn btn-square mx-1" href="">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item bg-light rounded">
                                <div className="text-center border-bottom p-4">
                                    <img
                                        className="img-fluid rounded-circle mb-4"
                                        src="assets/img/team-3.jpg"
                                        alt=""
                                    />
                                    <h5>Tony Johnson</h5>
                                    <span>SEO Expert</span>
                                </div>
                                <div className="d-flex justify-content-center p-4">
                                    <a className="btn btn-square mx-1" href="">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="btn btn-square mx-1" href="">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="btn btn-square mx-1" href="">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a className="btn btn-square mx-1" href="">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
