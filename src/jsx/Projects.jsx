// src/pages/Projects.jsx
import '../css/Page.css'
import '../css/Books.css'
import muniMapImage from '../../assets/imgs/muni-map.png';
import pipelineImage from '../../assets/imgs/pipeline.png';

const ProjectCard = ({ title, description, image, imageAlt, tags, link }) => {
    const cardContent = (
        <div className='Project-list-elem'>
            <div className="Project-content">
                <div className="Project-title">
                    {title}
                </div>
                <div className="Project-description">
                    {description}
                    <br></br>
                    <br></br>
                    <p>
                        <b>Tags: </b> 
                        {tags.map((tag, index) => (
                            <span key={index}>
                                <i>{tag}</i>
                                {index < tags.length - 1 && ', '}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
            <div className="Project-image">
                <img src={image} alt={imageAlt || title} />
            </div>
        </div>
    );

    if (link) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                {cardContent}
            </a>
        );
    }

    return cardContent;
};

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Live MUNI Vehicle Map',
            description: 'A real-time map of all public transportation vehicles in SF\'s MUNI network. Data collection and tiered-storage.',
            image: muniMapImage,
            imageAlt: 'SFMTA MUNI Map',
            tags: ['React', 'React Leaflet', 'HTML', 'CSS'],
            link: 'https://github.com/polar3197/muni-ui'
        },
        {
            id: 2,
            title: 'MUNI Vehicles Data Pipeline',
            description: 'Automated 24/7 fetching of vehicle attributes. Database paritioning, weekly export to S3 for tiered storage of historical data for future analytics.',
            image: pipelineImage,
            imageAlt: 'Project',
            tags: ['GTFS', 'PostgreSQL', 'SQLAlchemy', 'FastAPI', 'S3'],
            link: 'https://github.com/polar3197/muni'
        },
        {
            id: 3,
            title: 'Agentic LLM Interface to MUNI Map',
            description: 'Speeding up OpenAI interfacing and adding tool use for qurying and navigating live MUNI Map.',
            image: 'tbd',
            imageAlt: 'Project',
            tags: ['Claude SDK', 'FastAPI', 'Tools'],
        }
        // {
        //     id: 3,
        //     title: 'Local LLM Server',
        //     description: 'Local optimized LLM model running on Mac Studio.',
        //     image: 'TBD',
        //     imageAlt: 'Project'
        // },
        // {
        //     id: 4,
        //     title: 'TBD',
        //     description: 'TBD.',
        //     image: 'TBD',
        //     imageAlt: 'Project'
        // },
        // {
        //     id: 5,
        //     title: 'TBD',
        //     description: 'TBD.',
        //     image: 'TBD',
        //     imageAlt: 'Project'
        // }
    ];

    return (
        <>
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
                            tags={project.tags}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default Projects;