/* eslint-disable no-useless-constructor */
import React from "react";

const Education = (props) => {

    const { education, removeEducation  } = props;

    return(
        <div className="educationDiv">
            {education.map((degree) => {
                return <div className="degree" id={degree.id} key={degree.id}>
                            <div className="school">
                                <h3>{degree.school}</h3>
                            </div>
                            <div className="major">
                                <p>Major :</p>
                                <p>{degree.major}</p>
                            </div>
                            <div className="minor">
                                <p>Minor :</p>
                                <p>{degree.minor}</p>
                            </div>
                            <div className="degreeStartDate">
                                <p>{degree.startDate} to {degree.endDate}</p>
                            </div>
                            <div className="resumeBtns">
                                <button className="editEducation" >Edit Education</button>
                                <button className="deleteEducation" onClick={()=>removeEducation(degree.id)}>Delete Education</button>
                            </div>
                        </div>
            })}
        </div>
        
    )
}


export default Education;