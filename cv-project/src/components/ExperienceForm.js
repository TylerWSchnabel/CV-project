import React from "react";
import uniqid from "uniqid";

const ExperienceForm = (props) => {
    
    const { workHistory } = props;

    const experienceChange= (e) => {
        this.setState({
            experience: {
                company: document.getElementById('companyInput').value,
                position: document.getElementById('positionInput').value,
                description: document.getElementById('descriptionInput').value,
                startDate: document.getElementById('positionStartInput').value,
                endDate: document.getElementById('positionEndInput').value,
                id: this.state.experience.id
            }
        })
    }

    const submitExperience = (e) => {
        e.preventDefault();
        this.setState({
            workHistory : this.state.workHistory.concat(this.state.experience),
            experience: {
                company: '',
                position: '',
                description: '',
                startDate: '',
                endDate: '',
                id: uniqid()
            }
        })
    }



    return(
        <form id='experienceForm' onSubmit={submitExperience}>
            <label id='companyLabel' className='label'>Company</label>
            <input 
                onChange={experienceChange}
                type='text'
                id = 'companyInput'
                value={this.state.experience.company}
            />
            <label id='positionLabel' className='label'>Position</label>
            <input 
                onChange={experienceChange}
                type='text'
                id = 'positionInput'
                value={this.state.experience.position}
            />
            <label id='positionStartLabel' className='label'>Start Date</label>
            <input 
                onChange={experienceChange}
                type='date'
                id = 'positionStartInput'
                value={this.state.experience.startDate}
            />
            <label id='positionEndLabel' className='label'>End Date</label>
            <input 
                onChange={experienceChange}
                type='date'
                id = 'positionEndInput'
                value={this.state.experience.endDate}
            />
            <label id='descriptionLabel' className='label'>Description</label>
            <textarea
                onChange={experienceChange}
                type='text'
                id = 'descriptionInput'
                value={this.state.experience.description}
            />
            <button type='submit' className='submitBtn'>Add Experience</button>
        </form>

    )


}

export default ExperienceForm