import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../common/section-title";

//Import Images
import img1 from "../../assets/images/features/mockup1.png";
import img2 from "../../assets/images/features/mockup2.png";
import FeatureBox from "../common/feature-box";

class Aboutus extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="Aboutus">
          <Container>
            <SectionTitle title1="Our" title2="Mission" />
            <Row className="mt-4 pt-4 vertical-content">
              <Col lg="6" className="mt-2">
                <div>
                  <img
                    src={img1}
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
              <Col lg="6" className="mt-2 text-center">
                <FeatureBox
                  class=""
                  title="Over View"
                  desc="A full consultation to identify gaps and opportunities is included in our service, as well as a comprehensive report that contains a project plan with timeframes and milestones, a cost analysis, and a timetable. We also have a number of high-quality goods that will assist you in getting there fast and easily.Business mentors are important, that's why we choose our clients carefully. We aim to dedicate time and attention that each of you demands."
                  link="#"
                />
              </Col>
            </Row>
            <Row className="mt-5 vertical-content">
              <Col lg="6" className="mt-2">
                <FeatureBox
                  class="text-center"
                  title="College Automation system overview"
                  desc="WebOne offers tons of features that reflects on the major philosophy of the Schools or Colleges but to really make Webone useful to the schools is to provide implementation requirement to the school. Educational Institutes are evolving each day and to really make a generalized tool or platform for all of them can be a tough task. Finishing School program for Colleges."
                  link="#"
                />
              </Col>
              <Col lg="6" className="mt-2">
                <div>
                  <img
                    src={img2}
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Aboutus;
