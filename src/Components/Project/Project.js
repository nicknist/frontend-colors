import React from 'react';
import Palette from '../Palette/Palette';

//will need some sort of deleteProject thing going down here

const Project = ({ info }) => {
  return (
    <>
      <h1>{info.name}</h1>
      <p>Delete Project Button incoming</p>
      {info.palettes.map(palette => <Palette key={palette.colors[0].color} name={palette.name} colors={palette.colors} />)}
    </>
  )
}

export default Project;
