import React from 'react';
import './Project.css';
import project_data from '../../assets/projectData';

function Project() {
  return (
    <div id='project' className='myProject'>
      <div className="myProject_title">
        <h1>Project</h1>
      </div>
      <div className="Myproject-container">
        {project_data.map((proj, index) => {
          return (
            <div key={index} className="project-card">
              <img src={proj.proj_img} alt={proj.name} />
              <h2>{proj.name}</h2>
              <p>{proj.description}</p>
              <div className="project-buttons">
                <a href={proj.code_link} target="_blank" rel="noopener noreferrer">
                  <button>Get Code</button>
                </a>
                <a href={proj.live_link} target="_blank" rel="noopener noreferrer">
                  <button>Live</button>
                </a>
              </div>
              
            </div>
          );
        })}
        
      </div>
      <a href="https://github.com/Swadu11" className="my-Github" target="_blank" rel="noopener noreferrer">  My GitHub</a>
    </div>
  );
}

export default Project;
