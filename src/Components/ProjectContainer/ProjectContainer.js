import React from 'react';
import Project from '../Project/Project';

const ProjectContainer = ({ projects }) => {
  return (
    <>
      {projects.map(project => <Project key={project.title} info={project}/>)}
    </>
  )
}

export default ProjectContainer;
