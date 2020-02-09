import React, { Component } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import PaletteContainer from '../PaletteContainer/PaletteContainer';

const getFiveRandomColors = (colors) => {
  const randomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;
  if (colors.length === 0) {
    return [
      { color: randomColor(), locked: false },
      { color: randomColor(), locked: false },
      { color: randomColor(), locked: false },
      { color: randomColor(), locked: false },
      { color: randomColor(), locked: false }]
  }
  let newArray = [];
  colors.forEach(color => {
    if (color.locked) {
      newArray.push({ color: color.color, locked: true });
    } else {
      newArray.push({ color: randomColor(), locked: false });
    }
  })
  return newArray;
}

class ColorContainer extends Component {
  constructor() {
    super();
    this.state = {
      colors: getFiveRandomColors([]),
      palettes: [],
      paletteName: ''
    }
  }

  handleClick = () => {
    this.setState({ colors: getFiveRandomColors(this.state.colors) })
  }

  handleChange = (color, id) => {
    let newColors = [...this.state.colors];
    newColors.splice(id, 1, color);
    this.setState({ colors: newColors });
  }

  handleUpdate = (value) => {
    this.setState({ paletteName: value })
  }

  lockColor = (colorHex, id, locked) => {
    let newColors = [...this.state.colors];
    let lockedColor = { color: colorHex, locked: !locked };
    newColors.splice(id, 1, lockedColor);
    this.setState({ colors: newColors })
  }

  addPalette = () => {
    this.setState({ palettes: [...this.state.palettes, { colors: this.state.colors, name: this.state.paletteName }] })
  }

  deletePalette = async (name) => {
    let palette = this.state.palettes.findIndex(palette => name === palette.name)
    let array = [...this.state.palettes];
    array.splice(palette, 1);
    await this.setState({ palettes: array })
  }

  render() {
    const colors = this.state.colors;
    return (
      <>
        <section className='container'>
        <ColorPicker color={colors[0].color} locked={colors[0].locked} handleChange={this.handleChange} lock={this.lockColor} number={0}/>
        <ColorPicker color={colors[1].color} locked={colors[1].locked} handleChange={this.handleChange} lock={this.lockColor} number={1}/>
        <ColorPicker color={colors[2].color} locked={colors[2].locked} handleChange={this.handleChange} lock={this.lockColor} number={2}/>
        <ColorPicker color={colors[3].color} locked={colors[3].locked} handleChange={this.handleChange} lock={this.lockColor} number={3}/>
        <ColorPicker color={colors[4].color} locked={colors[4].locked} handleChange={this.handleChange} lock={this.lockColor} number={4}/>
        </section>
        <button className='randomizer' onClick={this.handleClick}>RANDOMIZE COLORS</button>
        <input type='text' className='palette-name' onChange={(e) => this.handleUpdate(e.target.value)}/>
        <button className='add-palette randomizer' onClick={this.addPalette}>Add These To a Palette</button>
        { this.state.palettes.length === 0 ? "Please add a Palette" : <PaletteContainer palettes={this.state.palettes} deletePalette={this.deletePalette}/>}
      </>
    )
  }
}

export default ColorContainer;
