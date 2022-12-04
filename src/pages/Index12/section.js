import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Particles
import Particles from 'react-particles-js';

//Importing Modal
import ModalSection from '../../components/common/ModalSection';
import ReactReadMoreReadLess from "react-read-more-read-less";


class Section extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
        this.callModal.bind(this)
    }

    callModal = () => {
        this.refs.child.openModal();
    }
    
    render() {
        const longText = 
  "Web One is an integrated unique School/College Management System, that provides an intuitive, student-friendly interface to manage educational institutions. Understanding the competition and improving on the available current technologies is must. That's why our team builds a business model taking the competition, and current available resources and requirements to build a sustainable platform that solves the problem of educational institutes.";

        return (
            <React.Fragment>
        <section className="bg-home" id="home">
            <div className="bg-overlay">
            <Particles
                                params={{
                                    "particles": {
                                        "number": {
                                            "value": 60
                                        },
                                        "size": {
                                            "value": 4
                                        }
                                    },
                                    "interactivity": {
                                        "events": {
                                            "onhover": {
                                                "enable": true,
                                                "mode": "repulse"
                                            }
                                        }
                                    },
                                    "move" : {
                                        "radius" : 10
                                    }
                                }}
                            />
            </div>
            <div className="home-center">
                <div className="home-desc-center">
                    <Container className="slidero">
                        <Row>
                            <Col lg="10" className="text-left">
                                <h6 className="home-title text-white">WebOne Schoolware 4.1</h6>
                               <p className="pt-4 home-sub-title text-white"> <ReactReadMoreReadLess
        charLimit={150}
        readMoreText={"Read more... "}
        readLessText={"Read less "}
        readMoreClassName="read-more-less--more text-primary"
        readLessClassName="read-more-less--less text-primary"
        
      >  
        {longText}
      </ReactReadMoreReadLess></p>
                                <div className="watch-video pt-4">
                                <Link onClick={this.callModal} to="#" className="video-play-icon text-white"><i className="mdi mdi-play play-icon-circle play play-iconbar"></i> <span>Watch The Video!</span></Link>
                                </div>
                            </Col>
                        </Row>
                        {/* Render ModalSection Component for Modal */}
                        <ModalSection ref="child" channel='vimeo' videoId='99025203' />
                    </Container>
                </div>
            </div>
        </section>
            </React.Fragment>
        );
    }
}

export default Section;