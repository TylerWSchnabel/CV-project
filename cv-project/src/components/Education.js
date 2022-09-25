/* eslint-disable no-useless-constructor */
import React from "react";

const Education = (props) => {

    const { education } = props;

    

    return(
        <div className="educationDiv">
            {education.map((degree) => {
                return <div className="degree" id={degree.id} key={degree.id}>
                            <div className="school">
                                <h3>{degree.school}</h3>
                            </div>
                            <div className="major">
                                <p>{degree.major}</p>
                            </div>
                            <div className="minor">
                                <p>{degree.minor}</p>
                            </div>
                            <div className="degreeStartDate">
                                <p>{degree.startDate}</p>
                            </div>
                            <div className="degreeEndDate">
                                <p>{degree.endDate}</p>
                            </div>
                            <button className="editEducation" >Edit Education</button>
                            <button className="deleteEducation">Delete Education</button>
                        </div>
            })}
        </div>
        
    )
}


export default Education;