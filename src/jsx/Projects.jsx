// src/pages/Projects.jsx
import React from 'react';
import muniMapImage from '../../assets/imgs/muni-map.png';

const ProjectCard = ({ title, description, image, imageAlt }) => {
    return (
        <div className='Project-list-elem'>
            <div className="Project-content">
                <div className="Project-title">
                    {title}
                </div>
                <div className="Project-description">
                    {description}
                </div>
            </div>
            <div className="Project-image">
                <img src={image} alt={imageAlt || title} />
            </div>
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Live MUNI Vehicle Map',
            description: 'A real-time map of all public transportation vehicles in SF\'s MUNI network. Data collection and tiered-storage.',
            image: muniMapImage,
            imageAlt: 'SFMTA MUNI Map'
        },
        {
            id: 2,
            title: 'Agentic LLM Interface to MUNI Map',
            description: 'Speeding up OpenAI interfacing and tool use for qurying and navigating live MUNI Map.',
            image: 'tbd',
            imageAlt: 'Project'
        },
        {
            id: 3,
            title: 'Local LLM Server',
            description: 'Local optimized LLM model running on Mac Studio.',
            image: 'TBD',
            imageAlt: 'Project'
        },
        {
            id: 4,
            title: 'TBD',
            description: 'TBD.',
            image: 'TBD',
            imageAlt: 'Project'
        },
        {
            id: 5,
            title: 'TBD',
            description: 'TBD.',
            image: 'TBD',
            imageAlt: 'Project'
        }
    ];

    return (
        <div className='Page'>
            <div className="Header">
                Projects
            </div>
            <div className="Page-Content-inner">
                <div className='Project-list'>
                    {projects.map(project => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            imageAlt={project.imageAlt}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;