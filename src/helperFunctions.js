import { getPalette, deletePalette, postProject, postPalette } from './apiCalls';

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

export const handleDeletePalette = async (name, palettes, setPalettes) => {
  let palette = palettes.findIndex(palette => name === palette.name);
  let fullPalette = palettes.find(palette => name === palette.name);
  let array = [...palettes];
  array.splice(palette, 1);
  await deletePalette(fullPalette.id);
  await setPalettes(array);
}

export const handlePostProject = async (palettes, setPalettes, projectName) => {
  if (palettes.length !== 3) {
    alert('Please make 3 Palettes for your Project!');
  } else {
    let project = {
      title: projectName,
      palette1_name: palettes[0],
      palette2_name: palettes[1],
      palette3_name: palettes[2]
    };
    await setPalettes([]);
    await postProject(project)
  }
}

export const addPalette = async (palettes, setPalettes, paletteName, colors) => {
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
