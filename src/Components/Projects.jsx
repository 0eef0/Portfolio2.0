import React, {useState, useEffect} from 'react';
import projectList from '../Utils/projects';

const Projects = () => {
    const [left, setLeft] = useState(0);


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.innerWidth >= 720){
                setLeft(window.scrollY);
            }
        })
    }, []);

    return (
        <div className='projectDiv' style={{left: `${left * 0.01 + 5}%`}}>
            {/* Coming soon div */}
            <div className='project' style={{
                display:'flex',
                alignItems:'center',
                order: 2
            }}>
                <h1 style={{
                    color:'white',
                    fontSize:'calc(2vw + 2vh)',
                    textAlign:'center',
                }}>More to <span className="flicker">come</span> soon!</h1>
            </div>
            {
                projectList.map((project) => {
                    const { projectName, projectImage, projectDesc, projectDate, projectRepo, projectLink } = project;
                    return (
                        <div key={projectName} className="project">
                            <img src={projectImage} alt={projectName} />
                            <div className="info">
                                <h1>{projectName}</h1>
                                <h3>Date Created: {projectDate}</h3>
                                <p>{projectDesc}</p>
                                <a href={projectRepo} target="_blank" rel="noreferrer"><button style={{left:'10%'}}><p>See the Repo</p></button></a>
                                <a href={projectLink} target="_blank" rel="noreferrer"><button style={{right:'10%'}}><p>Visit Site</p></button></a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Projects
