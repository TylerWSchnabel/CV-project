/* eslint-disable no-useless-constructor */
import React from "react";

const Experience = (props) => {
    const { workHistory, removeExperience, editExperience } = props;
    
    
    return( 
        <div className="workHistoryDiv">
            {workHistory.map((experience) => {
                return <div className="experienceDiv" id={experience.id} key={experience.id}>
                            <div className="company">
                                <h3>{experience.company}</h3>
                                <input type='text' className='editInputs' id={"companyInupt-"+experience.id} defaultValue={experience.company}></input>
                            </div>
                            <div className="experienceInfo">
                                <div className="position">
                                    <p>{experience.position}</p>
                                    <input type='text' className='editInputs' id={"positionInupt-"+experience.id} defaultValue={experience.position}></input>
                                </div>
                                <div className="dates">
                                    <div className="positionStartDate">
                                        <p>{experience.startDate}</p>
                                        <input type='date' className='editInputs' id={"startDateInupt-"+experience.id} defaultValue={experience.startDate}></input>
                                    </div>
                                    <div className="posiitonEndDate">
                                        <p>{experience.endDate}</p>
                                        <input type='date' className='editInputs' id={"endDateInupt-"+experience.id} defaultValue={experience.endDate}></input>
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                <p>{experience.description}</p>
                                <textarea type='text' className='editInputs' id={"descriptionInupt-"+experience.id} defaultValue={experience.description}></textarea>
                            </div>
                            <div className="resumeBtns">
                                <button className="editExperience" onClick={()=>editExperience(experience.id)}>Edit Experience</button>
                                <button className="deleteExperience" onClick={()=>removeExperience(experience.id)}>Delete Experience</button>
                            </div>
                        </div>
            })}
        </div>
    );
}
export default Experience;