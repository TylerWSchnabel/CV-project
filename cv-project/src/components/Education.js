/* eslint-disable no-useless-constructor */
import React from "react";

const Education = (props) => {

    const { education } = props;

    return(
        <div className="educationDiv">
            {education.map((degree) => {
                return(
                    <div className="degree">
                        <div className="school">
                            <p>{degree.school}</p>
                        </div>
                        <div className="major">
                            <p>{degree.major}</p>
                        </div>
                        <div className="minor">
                            <p>{degree.minor}</p>
                        </div>
                        <div className="degreeStartDate">
                            <p>{degree.degreeStartDate}</p>
                        </div>
                        <div className="degreeEndDate">
                            <p>{degree.degreeEndDate}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        
    )
}


export default Education;