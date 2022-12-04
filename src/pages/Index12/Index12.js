import React, { Component } from 'react';
import NavbarPage from "../../components/Navbar/Navbar_Page";
import Section from "./section";
import Footer from '../../components/Footer/footer';
import GetInTouch from '../../components/Get in Touch/get-in-touch';
import Services from '../../components/Service/services';
import Aboutus from '../../components/Aboutus/Aboutus';
import GetStarted from '../../components/Get Started/get-started';
import Product from '../../components/Product/Product';
import One from '../../components/Testimonials/Testimonial';
class Index9 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pos : document.documentElement.scrollTop,
            imglight : true,
            navClass : ""
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var scrollup=document.documentElement.scrollTop;
        if(scrollup > this.state.pos)
        {
            this.setState({navClass : "darkheader", imglight : false});
        }
        else
        {
            this.setState({navClass : "", imglight : true});
        }
    };

    render() {
        return (
            <React.Fragment>

               
                <NavbarPage navclass={this.state.navClass} imglight={this.state.imglight} />
              
                <Section/>
               
                <Aboutus/>
                
              <GetStarted/>
              <One/>
                <Services/>
                <Product/>
            
<GetInTouch/>
               
                <Footer/>

            </React.Fragment>
        );
    }
}

export default Index9;