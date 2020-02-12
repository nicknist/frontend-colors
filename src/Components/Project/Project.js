import React, { useState, useEffect } from 'react';
import Palette from '../Palette/Palette';
import { deleteProject } from '../../apiCalls';
import { getPalettes } from '../../helperFunctions';

const Project = ({ info }) => {
  const [palettes, setPalettes] = useState([]);

  useEffect(() => {
    let palettes = [];
    if (info.palette1_id) palettes.push(info.palette1_id);
    if (info.palette2_id) palettes.push(info.palette2_id);
    if (info.palette3_id) palettes.push(info.palette3_id);
    getPalettes(palettes).then(data => setPalettes(data));
  })

  return (
    <>
      <h1>{info.title}</h1>
      <button className='randomizer delete-project' onClick={() => deleteProject(info.id)}>NUKE IT</button>
      {palettes[0] ? <Palette
        key={palettes[0].color1}
        name={palettes[0].title}
        colors={[
          {color: palettes[0].color1},
          {color: palettes[0].color2},
          {color: palettes[0].color3},
          {color: palettes[0].color4},
          {color: palettes[0].color5},
        ]}
      /> : ''}
      {palettes[1] ? <Palette
        key={palettes[1].color1}
        name={palettes[1].title}
        colors={[
          {color: palettes[1].color1},
          {color: palettes[1].color2},
          {color: palettes[1].color3},
          {color: palettes[1].color4},
          {color: palettes[1].color5},
        ]}
      /> : ''}
      {palettes[2] ? <Palette
        key={palettes[2].color1}
        name={palettes[2].title}
        colors={[
          {color: palettes[2].color1},
          {color: palettes[2].color2},
          {color: palettes[2].color3},
          {color: palettes[2].color4},
          {color: palettes[2].color5},
        ]}
      /> : ''}
    </>
  )
}

export default Project;
