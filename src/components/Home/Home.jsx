import React, { Component } from 'react';
import './Home.css';
import Welcome from '../Welcome/Welcome';
import ReactPlayer from 'react-player';
import Footer from '../Footer/Footer';

class Home extends Component{
    render(){
        return(
                <div className="welcome">
                <Welcome/>
                {/* <iframe width="100%" height="610px" src="https://www.youtube.com/embed/trnPcQnoPtY?autoplay=1&ecver=1" frameborder="0" allowfullscreen></iframe> */}
                {/* <Footer /> */}
                </div>
        );
    }
}

export default Home;


