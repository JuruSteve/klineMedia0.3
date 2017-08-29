import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <div className="container row" >
                    <div className="well col-md-6">
                        <h1>LOCATION</h1>
                        <p>Watervaliet, Michigan</p>
                    </div>
                    <div className="well col-md-6">
                        <h1>FIND ME ON SOCIAL MEDIA</h1>
                        <ul>
                            <li>FACEBOOK</li>
                            <li>YOUTUBE</li>
                            <li>TWITTER</li>
                        </ul> 
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;