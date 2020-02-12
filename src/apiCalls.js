export const getProjects = () => {
  return fetch('https://backend-colors.herokuapp.com/api/v1/projects')
    .then(response => {
      if (!response.ok) {
        throw Error('Can not find any projects!')
      }
      return response.json();
    })
}

export const getProject = (id) => {
  return fetch(`https://backend-colors.herokuapp.com/api/v1/projects/${id}`)
    .then(response => {
      if(!response.ok) {
        throw Error('Can not find Project');
      }
      return response.json();
    })
}

export const getPalettes = () => {
  return fetch('https://backend-colors.herokuapp.com/api/v1/palettes')
    .then(response => {
      if (!response.ok) {
        throw Error('Can not find any palettes!')
      }
      return response.json();
    })
}

export const getPalette = (id) => {
  return fetch(`https://backend-colors.herokuapp.com/api/v1/palettes/${id}`)
    .then(response => {
      if(!response.ok) {
        throw Error('Can not find Palette');
      }
      return response.json();
    })
}

export const postPalette = (palette) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(palette),
    headers: { 'Content-Type': 'application/json' }
  };
  return fetch('https://backend-colors.herokuapp.com/api/v1/palettes', options)
    .then(response => {
      if (!response.ok) {
        throw Error('Could not post your Palette')
      }
      return response.json();
    })
};

export const postProject = (project) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(project),
    headers: { 'Content-Type': 'application/json' }
  };
  return fetch('https://backend-colors.herokuapp.com/api/v1/projects', options)
    .then(response => {
      if (!response.ok) {
        throw Error('Can not post Project')
      }
      return response.json();
    })
}

export const deletePalette = (id) => {
  return fetch(`https://backend-colors.herokuapp.com/api/v1/palettes/${id}`, { method: 'DELETE' })
    .then(response => {
      if (!response.ok) {
        throw Error('Could not delete that palette')
      }
      return 'Nice Delete';
    })
}

export const deleteProject = (id) => {
  return fetch(`https://backend-colors.herokuapp.com/api/v1/projects/${id}`, { method: 'DELETE' })
    .then(response => {
      if (!response.ok) {
        throw Error('Could not delete that project')
      }
      return 'Oh Hello';
    })
}
