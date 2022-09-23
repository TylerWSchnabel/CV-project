/* eslint-disable no-useless-constructor */
import React, { Component} from "react";

class Experience extends Component {

    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="experienceDiv">
                <div className="company">
                    <h1>{this.props.company}</h1>
                </div>
                <div className="position">
                    <p>{this.props.position}</p>
                </div>
                <div className="description">
                    <p>{this.props.description}</p>
                </div>
                <div className="positionStartDate">
                    <p>{this.props.description}</p>
                </div>
                <div className="posiitonEndDate">
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default Experience;