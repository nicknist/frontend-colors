import React, { useState } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import PaletteContainer from '../PaletteContainer/PaletteContainer';
import { getFiveRandomColors, handleChange } from '../../helperFunctions';

const ColorContainer = () => {
  const [colors, setColors] = useState(getFiveRandomColors([]));
  const [palettes, setPalettes] = useState([]);
  const [paletteName, setPaletteName] = useState('');

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

  const addPalette = () => {
    if (palettes.length === 3) {
      alert('You can only have up to 3 paletts. Please delete one or make them into a Project!');
    } else {
      setPalettes([...palettes, { colors: colors, name: paletteName }]);
    }
  }

  const deletePalette = async (name) => {
    let palette = palettes.findIndex(palette => name === palette.name);
    let array = [...palettes];
    array.splice(palette, 1);
    await setPalettes(array);
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
      { palettes.length === 0 ? "Please add a Palette" : <PaletteContainer palettes={palettes} deletePalette={deletePalette}/>}
      <p>In Color Container -- Add These Palettes To A Project Incoming</p>
    </>
  )
}

export default ColorContainer;
