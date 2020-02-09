import React from 'react';
import Palette from '../Palette/Palette';

//will need some sort of deleteProject thing going down here
//Also need the deletePalette to take it off the project...

const Project = ({ info }) => {
  return (
    <>
      <h1>{info.name}</h1>
      <p>Delete Project Button incoming</p>
      {info.palettes.map(palette => <Palette key={palette.colors[0].color} name={palette.name} colors={palette.colors} deletePaletteFromProject={() => console.log('NUKE THE PALETTE')}/>)}
    </>
  )
}

export default Project;
