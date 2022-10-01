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
                                <input type='text' className='editInputs' id={"schoolInupt-"+degree.id} defaultValue={degree.school}></input>
                            </div>
                            <div className="major">
                                <p>Major :</p>
                                <p>{degree.major}</p>
                                <input type='text' className='editInputs' id={"majorInupt-"+degree.id} defaultValue={degree.major}></input>
                            </div>
                            <div className="minor">
                                <p>Minor :</p>
                                <p>{degree.minor}</p>
                                <input type='text' className='editInputs' id={"minorInupt-"+degree.id} defaultValue={degree.minor}></input>
                            </div>
                            <div className="degreeStartDate">
                                <p>{degree.startDate} to {degree.endDate}</p>
                                <input type='date' className='editInputs' id={"startDateInupt-"+degree.id} defaultValue={degree.startDate}></input>
                                <input type='date' className='editInputs' id={"endDateInupt-"+degree.id} defaultValue={degree.endDate}></input>
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