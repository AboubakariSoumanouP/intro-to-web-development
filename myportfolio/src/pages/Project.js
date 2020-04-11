import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Redirect } from "react-router-dom";

class Project extends React.Component {

    render(){
        
        return (
            <div className='project-container'>
                <h1 className='header'>Projects</h1>
                <div className="projects">
                    <ProjectCard name="Connect 4" viewProject ={this.viewProject}/>
                    <ProjectCard name="Monster" />
                    <ProjectCard name="Project 3" />
                </div>
            </div>  
        )
    }
    
}

export default Project;