import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { NavigationBar } from '../components/NavigationBar';

import { Container, Row, Col, Form } from "reactstrap";
import Divider from '@material-ui/core/Divider';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Testimony from './TestimonyCarousel';
import "./Home.css";

import KitchenHome from "../images/KitchenHome.png";
import Kitchen from "../images/Kitchen.jpg";
import Bathroom from "../images/BathRoom.jpg";
import MediaRoom from "../images/MediaRoom.jpg";
import LivingRoom from "../images/LivingRoom.jpg";
import GetStarted from "../images/GetStarted.jpg";
import Contractor from "../images/Contractor.png";

import Kitchen400 from "../images/Kitchen400x400.jpg";
import Bathroom400 from "../images/Bathroom400x400.jpg";
import Media400 from "../images/Media400x400.jpg";
import Living400 from "../images/Living400x400.jpg";


class Home extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#ede9e3' }}>
                <NavigationBar />

                {/* Header section */}
                <header id="home">
                    <div className="row banner">
                        <div className="banner-text">
                            <div><span className="banner1">Refresh <span className="banner2">YOUR HOME.</span></span></div>
                            <div><span className="banner3">Find everything you need to get started on building your dream home.</span></div>
                            <div className="button-header"><Link to="/register"><Button variant="outline-light" style={{ marginRight: "10px", marginTop: "10px", borderRadius: "0px", backgroundColor: "#7a9392" }} size="lg">SIGN-UP</Button></Link></div>
                        </div>
                    </div>
                </header>
                {/* End Header */}

                 {/* Home Remodeling section  */}
                <Container fluid style={{ backgroundColor: '#ede9e3' }}>
                    <div>

                        <Row className="home-title">
                            <span className="header1">HOME REMODELING </span>
                        </Row>
                        <Row className="home-title2">
                            <span className="header2">MADE SIMPLE<Divider /></span>
                        </Row>
                    </div>
                </Container>
                {/* Home Remodeling Images section  */}
                <Container className="cards">
                    <CardDeck className="d-flex" >
                        <Card className="card-main d-flex align-items-stretch w-100">
                            <Card.Img variant="top" src={Kitchen400} />
                            <Card.ImgOverlay  className="card-main-overlay">
                                <Card.Title  className="card-main-title text-center"><span className="card-title-text "> KITCHEN</span></Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="card-main d-flex align-items-stretch w-100">
                            <Card.Img variant="top" src={Bathroom400} />
                            <Card.ImgOverlay className="card-main-overlay">
                                <Card.Title className="card-main-title d-flex text-center"><span className="card-title-text ">BATHROOM </span></Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="card-main d-flex align-items-stretch w-100">
                            <Card.Img variant="top" src={Media400} />
                            <Card.ImgOverlay className="card-main-overlay">
                                <Card.Title className="card-main-title"><span className="card-title-text ">MEDIA ROOM</span></Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="card-main d-flex align-items-stretch w-100">
                            <Card.Img variant="top" src={Living400} />
                            <Card.ImgOverlay className="card-main-overlay">
                                <Card.Title className="card-main-title"><span className="card-title-text ">LIVING ROOM</span></Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </CardDeck>
                </Container>
                {/* End of Home Remodeling Images section  */}


                {/* About section  */}
                <section id="about">
                    <div className="row align-items-center" style={{ backgroundColor: ' #ede9e3' }}>
                        <div className="col-lg-7 order-1" style={{ backgroundColor: '#7a9392' }}>
                            <div className="about-text-area">

                                <span className="header1" style={{ color: 'white' }}>OUR</span>
                                <span className="header2" style={{ color: 'white' }}> PURPOSE</span>
                                <p className="about_text">Looking to refresh your home? Need ideas on home improvement and don't know where to start? Modern Living is your go-to site for all of your home improvement needs. </p>
                                <Link to="/register"><Button variant="outline-light" style={{ marginRight: "10px", borderRadius: "0px" }} size="md">SIGN-UP</Button></Link>
                            </div>
                        </div>
                        <div className="col-lg-5 " >
                            <div className="about-image overlap-image">
                                <img src={KitchenHome} width="700" className="img-fluid" alt="Modern kitchen  " />
                            </div> 
                        </div>

                    </div>
                </section>
                {/* End of about section */}

                {/* Inspriation section */}
                <Container fluid id="inspiration" style={{ backgroundColor: '#ede9e3', padding: '0px' }}>
                    <div>
                        <Row className="home-title">
                            <span className="header1" style={{ color: '#ae6e1c' }}>SOME </span>
                        </Row>

                        <Row className="home-title2">
                            <span className="header2" style={{ color: '#ae6e1c' }}>INSPIRATION<Divider /></span>
                        </Row>

                    </div>

                    {/* Inspiration Images */}
                    <div className="row align-items-center px-0" style={{ backgroundColor: ' #ae6e1c' }}>
                        <div className="col-sm-3 px-0 d-flex" >
                            <div className="inspo-image">
                                <img src={Kitchen} className="img-fluid" alt="Modern kitchen." />
                            </div>
                        </div>

                        <div className="col-sm-3 d-flex" >
                            <h2 className="inspo-text1">KITCHEN</h2>
                        </div>

                        <div className="col-sm-3 px-0 d-flex" >
                            <div className="inspo-image">
                                <img src={Bathroom} className="img-fluid" alt="Modern kitchen  " />
                            </div>
                        </div>

                        <div className="col-sm-3 px-0 d-flex">
                            <h2 className="inspo-text1">BATHROOM</h2>
                        </div>
                    </div>

                    <div className="row align-items-center inspo-row2" >
                        <div className="col-sm-3 px-0 d-flex order-2 order-lg-1" >
                            <h2 className="inspo-text2">MEDIA ROOM</h2>
                        </div>

                        <div className="col-sm-3 px-0 d-flex order-1 order-lg-2" >
                            <div className="inspo-image">
                                <img src={MediaRoom} className="img-fluid" alt="Modern kitchen  " />
                            </div>
                        </div>

                        <div className="col-sm-3 px-0 d-flex order-4 order-lg-3" >
                            <h2 className="inspo-text2">LIVING ROOM</h2>
                        </div>

                        <div className="col-sm-3 px-0 d-flex order-3 order-lg-4" >
                            <div className="inspo-image">
                                <img src={LivingRoom} className="img-fluid" alt="Modern kitchen  " />
                            </div>
                        </div>
                    </div>
                </Container>
                {/* End of Inspriation section */}
                

                {/* Get started section  */}
                <section id="started">
                    <div className="row align-items-center" >
                        <div className="col-lg-7  " style={{ backgroundColor: '#626366' }}>
                            <div className="help-text-area ">
                                <span className="header1" style={{ color: 'white' }}>GET</span>
                                <span className="header2" style={{ color: 'white' }}> STARTED</span>
                                <p className="help-text">Sometimes the hardest part of home remodeling is not knowing where to start. Who wants to run to Lowe's multiple times a say because you forgot that one thing?</p>
                                <p className="help-text">We have created a checklist to help you jumpstart your project and help you make the best decisions.</p>
                                <Link to="/register"><Button variant="outline-light" style={{ marginRight: "10px", borderRadius: "0px" }} size="md">SIGN-UP</Button></Link>
                            </div>
                        </div>
                        <div className="col-lg-5 " >
                            <div className="started-image overlap-image">
                                <img src={GetStarted} className="img-fluid" alt="Modern kitchen  " />
                            </div>
                        </div>
                    </div>
                </section>
                {/* End of get started section */}


                {/* Help section  */}
                <section id="help" className="px-0 d-flex">
                    <div className="row help-bg px-0" >
                        <div className="col-lg-6 px-0 help-contractor order-2 order-lg-1" >
                            <img src={Contractor} alt="Modern kitchen " />
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2" >
                            <div className="about-text-area">
                                <span className="header1" >NEED HELP?</span>
                                <p className="help-text" style={{ color: ' #626366' }}>Do you need help with interior design or on a plumbing project? Pick what you need help with and we provide you with the best contractors/designers available. </p>
                                <Link to="/register"><Button variant="outline-dark" style={{ marginRight: "10px", borderRadius: "0px" }} size="md">SIGN-UP</Button></Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End of help section */}


                {/* Testimonials section  */}
                <section id="testimonials" className="testimonials test-bg">
                    <div>
                        <Row className="testimonials-title">
                            <span className="header1" style={{ color: 'white' }}>TESTIMONIALS <Divider /></span>
                        </Row>
                    </div>
                    <div className="row test-text" >
                        <div className="col-lg-7">
                            <Testimony />
                        </div>
                        <div className="col-lg-5 px-0" >
                        </div>
                    </div>
                </section>
                {/* End of testimonials section */}


                {/* newsletters section  */}
                <section className="newsletter bg-footer">
                    <div>
                        <Row className="testimonials-title">
                            <span className="header1" style={{ color: 'white' }}>STAY UP-TO-DATE <Divider /></span>
                        </Row>
                    </div>
                    <div className="footer-subscribe py-5 align-items-center">
                        <Row>
                            <Col lg={7}>
                                <div >
                                    <h5 className="newsletter-text mt-2 pt-1">Stay up-to-date with the latetest trends and news from MODERN LIVING. </h5>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className="footer-subcribe">
                                    <Form action="#">
                                    <input className="newsletter-input" placeholder="Your Email Address" type="text" />
                                        <Button color="red" type="submit"><i className="fas fa-envelope"></i></Button>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
                {/* End of newsletters section */}

            </div>
        );
    }
}

export default Home;