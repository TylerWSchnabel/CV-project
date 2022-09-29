/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import './App.css';
import React, { Component } from "react";
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import About from './components/About';
import uniqid from "uniqid";


class App extends Component {
    constructor(){
        super();
        
        this.state = {
            fullName :'',
            phoneNumber : '',
            email : '',
            linkedIn : '',
            about : '',
            degree: {school : '', major : '', minor : '',startDate : '', endDate:'', id: uniqid()},
            education: [],
            experience: { company:'', position:'', description:'', startDate:'', endDate:'', id: uniqid()},
            workHistory: [],
        };

        this.removeEducation = this.removeEducation.bind(this);
        this.removeExperience = this.removeExperience.bind(this);
        
        
    }

    removeExperience = (id) => {
        this.setState( {
            workHistory: this.state.workHistory.filter(degree=> degree.id !== id)
        })
    };

    editExperience = () => {

    }
    
    removeEducation = (id) => {
        this.setState( {
            education: this.state.education.filter(experience=> experience.id !== id)
        })
    };

    editEducation = () => {
        
    }
    
    infoChange = () => {
        this.setState({
            fullName: document.getElementById('nameInput').value,
            phoneNumber: document.getElementById('numberInput').value,
            email: document.getElementById('emailInput').value,
            linkedIn: document.getElementById('linkedInInput').value,
            about: document.getElementById('aboutInput').value
        })
    }
    
    educationChange = () => {
        this.setState({
            degree: {
                school: document.getElementById('schoolInput').value,
                major: document.getElementById('majorInput').value,
                minor: document.getElementById('minorInput').value,
                startDate: document.getElementById('schoolStartInput').value,
                endDate: document.getElementById('schoolEndInput').value,
                id: this.state.degree.id
            }
        })
    }
    experienceChange= () => {
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

    submitEducation = (e) => {
        e.preventDefault();
        this.setState({
            education : this.state.education.concat(this.state.degree),
            degree: {
                school: '',
                major: '',
                minor: '',
                startDate: '',
                endDate: '',
                id: uniqid()
            }
        })
    }

    submitExperience = (e) => {
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
    
    previewMode = ()=> {
        let divs = document.getElementsByClassName('resumeBtns');
        for (let i=0; i< divs.length; i++){
            divs[i].style.display = 'none';
        }
    }

    editMode = ()=>{
        let divs = document.getElementsByClassName('resumeBtns');
        for (let i=0; i< divs.length; i++){
                divs[i].style.display = 'grid';
        }
    }


    render() {
        const { fullName, phoneNumber, email, linkedIn, degree, education, experience, workHistory} = this.state;

        return(
            <div className='main'>
                <h1 className='mainTitle'>Resume Builder</h1>
                <div id='infoDiv'>
                    <h2 className='formTitle'>Basic Info</h2>
                    <form id='infoForm'>
                        <input 
                            onChange={this.infoChange}
                            type='text'
                            id = 'nameInput'
                            value={this.state.fullName}
                            placeholder='Full Name'
                        />
                        <input 
                            onChange={this.infoChange}
                            type='tel'
                            id = 'numberInput'
                            value={this.state.phoneNumber}
                            placeholder='Phone Number'
                        />
                        <input
                            onChange={this.infoChange}
                            type='email'
                            id = 'emailInput'
                            value={this.state.email}
                            placeholder='Email'
                        />
                        <input
                            onChange={this.infoChange}
                            type='url'
                            id = 'linkedInInput'
                            value={this.state.linkedIn}
                            placeholder='LinkedIn'
                        />
                        <textarea
                            onChange={this.infoChange}
                            type='url'
                            id = 'aboutInput'
                            value={this.state.about}
                            placeholder='About'
                        />
                    </form>
                </div>
                <div id='experienceDiv'>
                    <h2 className='formTitle'>Work History</h2>
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
                        <label id='descriptionLabel' className='label'>Description</label>
                        <textarea
                            onChange={this.experienceChange}
                            type='text'
                            id = 'descriptionInput'
                            value={this.state.experience.description}
                        />
                        <button type='submit' className='submitBtn'>Add Experience</button>
                    </form>
                </div>
                <div id='educationDiv'>
                    <h2 className='formTitle'>Education</h2>
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
                        <button type='submit' className='submitBtn'>Add Education</button>
                    </form>
                </div>
                <div className='resumeContainer'>
                    <h2 className='resumeTitle'>Resume Preview</h2>
                    <div className='previewBtnsDiv'>
                        <button onClick={this.editMode} className='previewBtns'>Edit Mode</button>
                        <button onClick={this.previewMode} className='previewBtns'>Peview Mode</button>
                    </div>
                    <div className='resume'>
                        <div className='resumeHead'>
                            <Header name = {this.state.fullName} phone = {this.state.phoneNumber} email = {this.state.email} linkedIn = {this.state.linkedIn} about = {this.state.about}/>
                        </div>
                        <div className='resumeMain'>
                            <About about = {this.state.about}/>
                            <h2 className='secHead'>Experience</h2>
                            <Experience  workHistory={workHistory} removeExperience={this.removeExperience}/>
                            <h2 className='secHead'>Education</h2>
                            <Education  education={education} removeEducation={this.removeEducation}/>
                        </div>
                    </div>
                </div>
            
            </div>
        )
    }

}

export default App;
