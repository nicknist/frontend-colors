import { getPalette } from './apiCalls';

export const randomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;

export const getFiveRandomColors = (colors) => {
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

export const getPalettes = async (palettes) => {
  let palettePromises = palettes.map(palette => getPalette(palette));
  return Promise.all(palettePromises)
}
