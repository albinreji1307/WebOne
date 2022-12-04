import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import SectionTitle from "../common/section-title";
// Import Background Image
import Background from "../../assets/images/hero-1-bg-img.png";
import hero from "../../assets/images/hero-img.png";

class One extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="hero-1-bg bg-light" style={{ backgroundImage: `url(${Background})` }}   id="service">
          <Container>
            <Row className="align-items-center justify-content-center">
              <Col lg={6}>
                <h1 className="display-4 font-weight-medium mb-4">Our Service</h1>
               
                <p className="text-muted mb-4 pb-3" style={{textAlign:"justify"}}>Schoolware4.2 is a unique educational institution management system information reports provide bird-eye view of school performance at academic and finance level. Our software simplifies the administration of academics and enables real-time transparent and insight-driven decisions for the institute. It provides an array of reports and monitors that help in maximum utilization of the resources. A complete integrated school administrative software with task management, admission and fee collection, attendance management, and results reporting functionalities. We are the pioneers of School automation in Kerala and in this field for more than a decade. We offer the product with international standards and state-of-the-art technology.</p>
                <Link to="#"  className="btn btn-primary">Know More<span className="ml-2 right-icon">&#8594;</span></Link>
              </Col>
              <Col lg={6} md={10}>
                <div className=" mt-5 mt-lg-0">
                  <img src={hero} alt="" className="img-fluid d-block mx-auto" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default One;
