import React, { useState } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import PaletteContainer from '../PaletteContainer/PaletteContainer';
import { getFiveRandomColors } from '../../helperFunctions';
import { postPalette, deletePalette, postProject } from '../../apiCalls';

const ColorContainer = () => {
  const [colors, setColors] = useState(getFiveRandomColors([]));
  const [palettes, setPalettes] = useState([]);
  const [paletteName, setPaletteName] = useState('');
  const [projectName, setProjectName] = useState('');

  const handleChange = (color, id) => {
    let newColors = [...colors];
    newColors.splice(id, 1, { color: color, locked: true});
    setColors(newColors);
  }

  const lockColor = (colorHex, id, locked) => {
    let newColors = [...colors];
    let lockedColor = { color: colorHex, locked: !locked };
    newColors.splice(id, 1, lockedColor);
    setColors(newColors);
  }

  const addPalette = async () => {
    if (palettes.length === 3) {
      alert('You can only have up to 3 palettes. Please delete one or make them into a Project!');
    } else {
      let newPalette = await postPalette({
        title: paletteName,
        color1: colors[0].color,
        color2: colors[1].color,
        color3: colors[2].color,
        color4: colors[3].color,
        color5: colors[4].color
      });
      let setPalette = {
        id: newPalette.id,
        name: newPalette.title,
        colors: [
          { color: newPalette.color1, locked: false },
          { color: newPalette.color2, locked: false },
          { color: newPalette.color3, locked: false },
          { color: newPalette.color4, locked: false },
          { color: newPalette.color5, locked: false }
        ]
      };
      setPalettes([...palettes, setPalette]);
    }
  }

  const handleDeletePalette = async (name) => {
    let palette = palettes.findIndex(palette => name === palette.name);
    let fullPalette = palettes.find(palette => name === palette.name);
    let array = [...palettes];
    array.splice(palette, 1);
    await deletePalette(fullPalette.id);
    await setPalettes(array);
  }

  const handlePostProject = async () => {
    if (palettes.length !== 3) {
      alert('Please make 3 Palettes for your Project!');
    } else {
      let project = {
        title: projectName,
        palette1_name: palettes[0] ? palettes[0].name : '',
        palette2_name: palettes[1] ? palettes[1].name : '',
        palette3_name: palettes[2] ? palettes[2].name : ''
      };
      await setPalettes([]);
      await postProject(project)
    }
  }

  return (
    <>
      <section className='container'>
        <ColorPicker
          color={colors[0].color}
          locked={colors[0].locked}
          handleChange={handleChange}
          lock={lockColor}
          number={0}
        />
        <ColorPicker
          color={colors[1].color}
          locked={colors[1].locked}
          handleChange={handleChange}
          lock={lockColor}
          number={1}
        />
        <ColorPicker
          color={colors[2].color}
          locked={colors[2].locked}
          handleChange={handleChange}
          lock={lockColor}
          number={2}
        />
        <ColorPicker
          color={colors[3].color}
          locked={colors[3].locked}
          handleChange={handleChange}
          lock={lockColor}
          number={3}
        />
        <ColorPicker
          color={colors[4].color}
          locked={colors[4].locked}
          handleChange={handleChange}
          lock={lockColor}
          number={4}
        />
      </section>
      <button className='randomizer' onClick={() => setColors(getFiveRandomColors(colors))}>RANDOMIZE COLORS</button>
      <input value={paletteName} type='text' className='palette-name' onChange={(e) => setPaletteName(e.target.value)}/>
      <button className='add-palette randomizer' onClick={addPalette}>Add These To a Palette</button>
      { palettes.length === 0 ? "Please add a Palette" :
        <>
          <PaletteContainer palettes={palettes} deletePalette={handleDeletePalette}/>
          <input value={projectName} type='text' className='project-name' onChange={(e) => setProjectName(e.target.value)}/>
          <button className='add-project randomizer' onClick={handlePostProject}>Make These Palettes a Project!</button>
        </>
      }
    </>
  )
}

export default ColorContainer;
