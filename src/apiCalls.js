export const getProjects = () => {
  return fetch('http://backend-colors.herokuapp.com/api/v1/projects')
    .then(response => {
      if (!response.ok) {
        throw Error('Can not find any projects!')
      }
      return response.json();
    })
}

export const getProject = (id) => {
  return fetch(`http://backend-colors.herokuapp.com/api/v1/projects/${id}`)
    .then(response => {
      if(!response.ok) {
        throw Error('Can not find Palette');
      }
      return response.json();
    })
}

export const getPalettes = () => {
  return fetch('http://backend-colors.herokuapp.com/api/v1/palettes')
    .then(response => {
      if (!response.ok) {
        throw Error('Can not find any projects!')
      }
      return response.json();
    })
}

export const getPalette = (id) => {
  return fetch(`http://backend-colors.herokuapp.com/api/v1/palettes/${id}`)
    .then(response => {
      if(!response.ok) {
        throw Error('Can not find Palette');
      }
      return response.json();
    })
}
