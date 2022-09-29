/* eslint-disable no-useless-constructor */
import React from "react";

const Experience = (props) => {
    const { workHistory, removeExperience } = props;
    
    
    return( 
        <div className="workHistoryDiv">
            {workHistory.map((experience) => {
                return <div className="experienceDiv" id={experience.id} key={experience.id}>
                            <div className="company">
                                <h3>{experience.company}</h3>
                            </div>
                            <div className="experienceInfo">
                                <div className="position">
                                    <p>{experience.position}</p>
                                </div>
                                <div className="dates">
                                    <div className="positionStartDate">
                                        <p>{experience.startDate}</p>
                                    </div>
                                    <div className="posiitonEndDate">
                                        <p>{experience.endDate}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                <p>{experience.description}</p>
                            </div>
                            <div className="resumeBtns">
                                <button className="editExperience">Edit Experience</button>
                                <button className="deleteExperience" onClick={()=>removeExperience(experience.id)}>Delete Experience</button>
                            </div>
                        </div>
            })}
        </div>
    );
}
export default Experience;