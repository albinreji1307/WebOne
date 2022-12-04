import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ReactReadMoreReadLess from "react-read-more-read-less";
import SectionTitle from "../common/section-title";
class GetStarted extends Component {
  render() {
    const longText = 
  "Our seasoned individuals have over 20 years of expertise in the field of information technology and are ready to assist you! A fully functional project using Python and the Django Web Framework to implement a School/Colage Management System. It comes with a variety of useful tools that will help users maintain the school's records.Webone is a multipurpose school management system that helps schools and collages automate their everyday operations and deliver informative information and 360-degree tracking so that stakeholders can make better and faster decisions to increase their institution's efficiency.The WebOne Schoolware4.1 is a proven School/Collage automation product. It has many installations across Kerala, India. We are well known in this industry with very good post installatiom supportand good track record. Without solving the core problems of the educational institute, there is no point in the implementation. To ensure that our solution solves the problem, and also improves on the older platforms is the key for future success and stability.";

    return (
      <React.Fragment>
        <section className="pt-5 pb-5 bg-custom">
          <Container>
            <Row className="justify-content-center" >
              <Col md="16" className="text-white critarea-desc " >
              
             
              <p className="pt-2 home-sub-title text-white"style={{textAlign:"center"}}> <SectionTitle title1="Web One" title2="Consultancy Service (P) Ltc" /><ReactReadMoreReadLess
        charLimit={150}
        readMoreText={"Read more... "}
        readLessText={"Read less "}
        readMoreClassName="read-more-less--more text-light"
        readLessClassName="read-more-less--less text-light"
        
      > 
        {longText}
      </ReactReadMoreReadLess></p>  </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default GetStarted;
