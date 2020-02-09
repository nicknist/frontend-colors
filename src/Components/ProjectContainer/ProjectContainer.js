import React from 'react';
import Project from '../Project/Project';

const ProjectContainer = ({ projects }) => {
  return (
    <>
      {projects.map(project => <Project key={project.name} info={project}/>)}
    </>
  )
}

export default ProjectContainer;
