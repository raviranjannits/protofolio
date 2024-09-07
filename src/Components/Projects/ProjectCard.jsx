import React from 'react';
import './ProjectCard.css';
import { Icon } from '@iconify/react';
const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.img} alt="Project" />
      <div className="project-actions">
        <h2>{props.name}</h2>
        <div className="project-links">
          <a href={props.github} target='_blank' rel='noreferrer' className='github-link'>
            <Icon icon="akar-icons:github-fill" />
          </a>
          <a href={props.link} target='_blank' rel='noreferrer'>
            <button className="button">
              LIVE
            </button>
          </a>
        </div>
      </div>
      <div className="desc">
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
