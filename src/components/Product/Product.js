import React, { Component } from "react";
import { Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from 'classnames';
import BackgroundSlider from 'react-background-slider';
import SectionTitle from "../common/section-title";
// Import Image
import Img1 from "../../assets/images/clients/img-1.png";
import Img2 from "../../assets/images/clients/img-2.png";
import Img3 from "../../assets/images/clients/img-3.png";


class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "v-pills-work",
    };
    this.toggleTab = this.toggleTab.bind(this);
  }
  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <section className="section" id="Product">
          <Container>
          <SectionTitle title1="Our" title2="Product" />
            <Row className="justify-content-center">
              <Col lg={7}>
                <div className="text-center mb-5">
                
                  <p className="text-muted">Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur.</p>
                </div>
              </Col>
            </Row>
            <div className="client-content">
              <Row className="align-items-center">
                <Col lg={6} className="order-2 order-lg-1">
                  <TabContent id="v-pills-tabContent" activeTab={this.state.activeTab}>
                    <TabPane tabId="v-pills-work" className="fade show">
                      <img src={Img1} alt="" className="img-fluid d-block mx-auto" />
                     
                    </TabPane>
                    <TabPane tabId="v-pills-marketing" className="fade show">
                      <img src={Img2} alt="" className="img-fluid d-block mx-auto" />
                    </TabPane>
                    <TabPane tabId="v-pills-feedback" className="fade show">
                      <img src={Img3} alt="" className="img-fluid d-block mx-auto" />
                    </TabPane>
                  </TabContent>
                </Col>
                <Col lg={5} className="offset-lg-1 order-1 order-lg-2">
                  <Nav className="flex-column" pills id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <NavItem>
                      <NavLink href="#" className={classnames({ active: this.state.activeTab === 'v-pills-work' },"rounded" )} onClick={() => { this.toggleTab('v-pills-work'); }} id="v-pills-work-tab">
                        <h4 className="text-dark f-18">Learning Management System</h4>
                        <p className="text-muted f-15">A learning management system (LMS) is a software application for the administration, documentation, tracking, reporting, automation and delivery of educational courses, training programs, or learning and development programs. </p>
                        <p className="text-primary mb-0 read-more">Know More<span className="right-icon ml-2">&#8594;</span></p>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#" className={classnames({ active: this.state.activeTab === 'v-pills-marketing' },"rounded" )}  onClick={() => { this.toggleTab('v-pills-marketing'); }} id="v-pills-work-tab">
                        <h4 className="text-dark f-18"> Concept</h4>
                        <p className="text-muted f-15">A learning management system (LMS) is a software application for the administration, documentation, tracking, reporting, automation and delivery of educational courses, training programs, or learning and development programs. </p>
                        <p className="text-primary mb-0 read-more">Know More<span className="right-icon ml-2">&#8594;</span></p>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#" className={classnames({ active: this.state.activeTab === 'v-pills-feedback' },"rounded" )} onClick={() => { this.toggleTab('v-pills-feedback'); }} id="v-pills-work-tab">
                        <h4 className="text-dark f-18"> Values</h4>
                        <p className="text-muted f-15">LMS Guidlines
</p>
                        <p className="text-primary mb-0 read-more">Know More<span className="right-icon ml-2">&#8594;</span></p>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Product;


