import React, { Component } from 'react';
import './About.css';


class About extends Component {
    render(){
        return(
            <div className="container row">
                <div className="col-md-6">
                    <h1 className="title" >About Me</h1>
                    <img width={500} height={450} alt="900x500" src={require("../../assets/bigBird.PNG")} />
                </div>
                <div className="col-md-6" >
                    <h2>
                        Lorem ipsum dolor sit amet, duo commune scripserit scribentur in, veniam possit iudicabit ea nam, eam nullam ridens habemus ea. Velit vidisse habemus pri no, his eruditi alienum conclusionemque eu. Usu no oratio conceptam forensibus. Sed an etiam luptatum, ius natum molestie an, sit id graeci singulis. Dignissim rationibus argumentum id sed, utinam mentitum quo ei, noster deserunt id mea.

Omnis causae percipitur pri eu, ius id idque summo fastidii, quo ad vidisse virtute. An quo dictas maiestatis. Affert accusata repudiare ne his, ei mea virtute eleifend omittantur. Usu ne agam veritus delicatissimi.
                    </h2>
                </div>
            </div>
        );
    }

}

export default About; 