import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import lockIcon from './lock.png';
import unlock from './unlock.jpeg';

const ColorPicker = ({ locked, color, handleChange, lock, number }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const popOver = {
    position: 'absolute',
    zIndex: '2'
  };

  const cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  };

  const background = {
    margin: '10px',
    padding: '5px',
    width: '100px',
    height: '200px',
    background: `${color}`,
    borderRadius: '1px'
  }

  const icon = {
    background: 'white',
    width: '20px',
    height: '20px'
  }

  return (
    <article>
      <div className="color-rectangle" style={background} onClick={() => setDisplayColorPicker(!displayColorPicker)}></div>
      <p>{color}</p>
      <p>Hex Code</p>
      { displayColorPicker ?
        <div className="color-rectangle" style={popOver}>
        <div className="no-hover" id={`square${number}`} style={cover} onClick={() => setDisplayColorPicker(false)}/>
        <ChromePicker className="chrome-picker" disableAlpha={true} color={color} onChangeComplete={(color) => handleChange(color.hex, number)}/>
        </div> : null }
      { locked ? <img style={icon} alt="lock button" className="lock" src={lockIcon} onClick={() => lock(color, number, locked)}/> : <img style={icon} alt="unlock button" className="unlock" src={unlock} onClick={() => lock(color, number, locked)}/> }
    </article>
  )
}

export default ColorPicker;
