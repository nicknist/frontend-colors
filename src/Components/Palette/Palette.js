import React from 'react';

const Palette = ({ name, colors, deletePalette, palettes, setPalettes }) => {
  const colorDivs = colors.map(color => {
    const background = {
      margin: '10px',
      padding: '5px',
      width: '10px',
      height: '20px',
      background: `${color.color}`,
      borderRadius: '1px'
    }
    return (
      <div key={ color.color }style={ background }>
      </div>
    )
  })

  return (
    <>
      <h1 className='white'>{name}</h1>
      { deletePalette ? <button id={name} onClick={() => deletePalette(name, palettes, setPalettes)} className='randomizer'>Delete This Palette</button> : ''}
      <article className='palette-div'>
        {colorDivs}
      </article>
    </>
  )
}

export default Palette;
