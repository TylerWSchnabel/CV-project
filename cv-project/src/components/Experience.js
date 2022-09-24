/* eslint-disable no-useless-constructor */
import React from "react";

const Experience = (props) => {

    const { workHistory } = props;

    return(
        <div className="workHistoryDiv">
            {workHistory.map((experience) => {
                return <div className="experienceDiv" key={experience.id}>
                            <div className="company">
                                <h1>{experience.company}</h1>
                            </div>
                            <div className="position">
                                <p>{experience.position}</p>
                            </div>
                            <div className="description">
                                <p>{experience.description}</p>
                            </div>
                            <div className="positionStartDate">
                                <p>{experience.startDate}</p>
                            </div>
                            <div className="posiitonEndDate">
                                <p>{experience.endDate}</p>
                            </div>
                            <div className="editButtons">
                                <button className="editExperience">Edit Experience</button>
                                <button className="deleteExperience">Delete Experience</button>
                            </div>
                        </div>
            })}
        </div>
    )
}
export default Experience;