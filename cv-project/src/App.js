/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import './App.css';
import React, { Component } from "react";
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';


class App extends Component {
    constructor(){
        super();
        
        this.state = {
            fullName : '',
            phoneNumber : '',
            email : '',
            linkedIn : '',
            degree: {school : '', major : '', minor : '',startDate : '', endDate:''},
            education: [],
            experience: { company:'', position:'', description:'', startDate:'', endDate:''},
            workHistory: [],
        };
    }
    
    infoChange = (e) => {
        this.setState({
            fullName: document.getElementById('nameInput').value,
            phoneNumber: document.getElementById('numberInput').value,
            email: document.getElementById('emailInput').value,
            linkedIn: document.getElementById('linkedInInput').value,
            
            
        })
    }
    
    educationChange = (e) => {
        this.setState({
            degree: {
                school: document.getElementById('schoolInput').value,
                major: document.getElementById('majorInput').value,
                minor: document.getElementById('minorInput').value,
                startDate: document.getElementById('schoolStartInput').value,
                endDate: document.getElementById('schoolEndInput').value,
            }
        })
    }
    experienceChange= (e) => {
        this.setState({
            experience: {
                company: document.getElementById('companyInput').value,
                position: document.getElementById('positionInput').value,
                description: document.getElementById('descriptionInput').value,
                startDate: document.getElementById('positionStartInput').value,
                endDate: document.getElementById('positionEndInput').value,
            }
        })
    }

    submitEducation = (e) => {
        e.preventDefault();
        this.setState({
            education : this.state.education.concat(this.state.degree),
            degree: {
                school: document.getElementById('schoolInput').value,
                major: document.getElementById('majorInput').value,
                minor: document.getElementById('minorInput').value,
                startDate: document.getElementById('schoolStartInput').value,
                endDate: document.getElementById('schoolEndInput').value,
            }
        })
    }

    submitExperience = (e) => {
        this.setState({
            experience: {
                company: document.getElementById('companyInput').value,
                position: document.getElementById('positionInput').value,
                description: document.getElementById('descriptionInput').value,
                startDate: document.getElementById('positionStartInput').value,
                endDate: document.getElementById('positionEndInput').value,
            }
        })
    }

    render() {
        const { fullName, phoneNumber, email, linkedIn, degree, education, experience, workHistory} = this.state;

        return(
            <div>
                <div id='infoDiv'>
                    <form id='infoForm'>
                        <label id='nameLabel' className='label'>Name</label>
                        <input 
                            onChange={this.infoChange}
                            type='text'
                            id = 'nameInput'
                            value={this.state.fullName}
                        />
                        <label id='numberLabel' className='label'>Phone Number</label>
                        <input 
                            onChange={this.infoChange}
                            type='tel'
                            id = 'numberInput'
                            value={this.state.phoneNumber}
                        />
                        <label id='emailLabel' className='label'>Email</label>
                        <input
                            onChange={this.infoChange}
                            type='email'
                            id = 'emailInput'
                            value={this.state.email}
                        />
                        <label id='linkedInLabel' className='linkedIn'>LinkedIn</label>
                        <input
                            onChange={this.infoChange}
                            type='url'
                            id = 'linkedInInput'
                            value={this.state.linkedIn}
                        />
                    </form>
                </div>
                <div id='educationDiv'>
                    <form id='educationForm' onSubmit={this.submitEducation}>
                        <label id='schoolLabel' className='label'>University</label>
                        <input 
                            onChange={this.educationChange}
                            type='text'
                            id = 'schoolInput'
                            value={this.state.degree.school}
                        />
                        <label id='majorLabel' className='label'>Major</label>
                        <input 
                            onChange={this.educationChange}
                            type='text'
                            id = 'majorInput'
                            value={this.state.degree.major}
                        />
                        <label id='minorLabel' className='label'>Minor</label>
                        <input 
                            onChange={this.educationChange}
                            type='text'
                            id = 'minorInput'
                            value={this.state.degree.minor}
                        />
                        <label id='schoolStartLabel' className='label'>Start Date</label>
                        <input 
                            onChange={this.educationChange}
                            type='date'
                            id = 'schoolStartInput'
                            value={this.state.degree.startDate}
                        />
                        <label id='schoolEndLabel' className='label'>End Date</label>
                        <input 
                            onChange={this.educationChange}
                            type='date'
                            id = 'schoolEndInput'
                            value={this.state.degree.endDate}
                        />
                        <button type='submit'>Add Education</button>
                    </form>
                </div>
                <div id='experienceDiv'>
                    <form id='experienceForm' onSubmit={this.submitExperience}>
                    <label id='companyLabel' className='label'>Company</label>
                        <input 
                            onChange={this.experienceChange}
                            type='text'
                            id = 'companyInput'
                            value={this.state.experience.company}
                        />
                        <label id='positionLabel' className='label'>Position</label>
                        <input 
                            onChange={this.experienceChange}
                            type='text'
                            id = 'positionInput'
                            value={this.state.experience.position}
                        />
                        <label id='descriptionLabel' className='label'>Description</label>
                        <input 
                            onChange={this.experienceChange}
                            type='text'
                            id = 'descriptionInput'
                            value={this.state.experience.description}
                        />
                        <label id='positionStartLabel' className='label'>Start Date</label>
                        <input 
                            onChange={this.experienceChange}
                            type='date'
                            id = 'positionStartInput'
                            value={this.state.experience.startDate}
                        />
                        <label id='positionEndLabel' className='label'>End Date</label>
                        <input 
                            onChange={this.experienceChange}
                            type='date'
                            id = 'positionEndInput'
                            value={this.state.experience.endDate}
                        />
                        <button type='submit'>Add Experience</button>
                    </form>
                    <Header name = {this.state.fullName} phone = {this.state.phoneNumber} email = {this.state.email} linkedIn = {this.state.linkedIn}/>
                    <Education  education={education}/>
                    <Experience  />
                </div>
            </div>
        )
    }
}

export default App;
