import { getProjects, getProject, getPalettes, getPalette, postPalette, postProject, deletePalette, deleteProject } from './apiCalls';

describe('apiCalls', () => {
  describe('getProjects', () => {
    let mockProjects;

    beforeEach(() => {
      mockProjects = [
        {
          title: 'Hot pants',
          project1_name: 'Colins house',
          project2_name: 'Nicks house',
          project3_name: 'Colin and Nicks Crayons'
        }
      ];
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockProjects)
        })
      });
    });

    it('should be called with the correct url', () => {
      getProjects();
      expect(window.fetch).toHaveBeenCalledWith('http://backend-colors.herokuapp.com/api/v1/projects');
    });

    it('should get back projects when getProjects has a happy path', () => {
      expect(getProjects()).resolves.toEqual(mockProjects);
    });

    it('should send back an error when the response is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });
      expect(getProjects()).rejects.toEqual(Error('Can not find any projects!'))
    });
  });

  describe('getProject', () => {
    let mockProject;

    beforeEach(() => {
      mockProject = {
        title: 'Hot pants',
        project1_name: 'Colins house',
        project2_name: 'Nicks house',
        project3_name: 'Colin and Nicks Crayons'
      };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockProject)
        })
      });
    });

    it('should be called with the correct url', () => {
      getProject(1);
      expect(window.fetch).toHaveBeenCalledWith(`http://backend-colors.herokuapp.com/api/v1/projects/1`)
    });

    it('should return a project when called', () => {
      expect(getProject(1)).resolves.toEqual(mockProject)
    });

    it('should throw an error when the response is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(getProject(1)).rejects.toEqual(Error('Can not find Project'))
    });
  });

  describe('getPalettes', () => {
    let mockPalettes;

    beforeEach(() => {
      mockPalettes = [
        {
          title: 'TEST NUKE PALETTE',
          color1: '#867CBC',
          color2: '#E2F7EF',
          color3: '#23889A',
          color4: '#A6E508',
          color5: '#D15120'
        },
        {
          title: 'Colins house',
          color1: '#E2A7EF',
          color2: '#867CCC',
          color3: '#23888A',
          color4: '#D15120',
          color5: '#A6E308'
        },
        {
          title: 'Nicks house',
          color1: '#867CCC',
          color2: '#E2A7EF',
          color3: '#23888A',
          color4: '#A6E308',
          color5: '#D15120'
        },
        {
          title: 'Colin and Nicks Crayons',
          color1: '#867CBC',
          color2: '#E2F7EF',
          color3: '#23889A',
          color4: '#A6E508',
          color5: '#D15120'
        },
      ];
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockPalettes)
        });
      });
    });

    it('should return an array of Palettes when called', () => {
      expect(getPalettes()).resolves.toEqual(mockPalettes);
    });

    it('should be called with the correct url', () => {
      getPalettes();
      expect(window.fetch).toHaveBeenCalledWith('http://backend-colors.herokuapp.com/api/v1/palettes');
    });

    it('should throw an error when response is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(getPalettes()).rejects.toEqual(Error('Can not find any palettes!'))
    });
  });

  describe('getPalette', () => {
    let mockPalette;

    beforeEach(() => {
      mockPalette = {
        title: 'TEST NUKE PALETTE',
        color1: '#867CBC',
        color2: '#E2F7EF',
        color3: '#23889A',
        color4: '#A6E508',
        color5: '#D15120'
      };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockPalette)
        });
      });
    });

    it('should return a palette when called', () => {
      expect(getPalette(2)).resolves.toEqual(mockPalette);
    });

    it('should be called with the correct url', () => {
      getPalette(3);
      expect(window.fetch).toHaveBeenCalledWith(`http://backend-colors.herokuapp.com/api/v1/palettes/3`)
    });

    it('should throw an error when the response is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(getPalette(1)).rejects.toEqual(Error('Can not find Palette'))
    })
  });

  describe('postPalette', () => {
    let mockPalette;
    let mockOptions;

    beforeEach(() => {
      mockPalette = {
        title: 'TEST POST PALETTE',
        color1: '#867CBC',
        color2: '#E2F7EF',
        color3: '#23889A',
        color4: '#A6E508',
        color5: '#D15120'
      };
      mockOptions = {
        method: 'POST',
        body: JSON.stringify(mockPalette),
        headers: { 'Content-Type': 'application/json' }
      }
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockPalette)
        });
      });
    });

    it('should return a mockPalette when posted', () => {
      expect(postPalette(mockPalette)).resolves.toEqual(mockPalette);
    });

    it('should be called with the correct url and options', () => {
      postPalette(mockPalette)
      expect(window.fetch).toHaveBeenCalledWith('http://backend-colors.herokuapp.com/api/v1/palettes', mockOptions)
    });

    it('should throw an error when response is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(postPalette(mockPalette)).rejects.toEqual(Error('Could not post your Palette'));
    });
  });

  describe('postProject', () => {
    let mockProject;
    let mockOptions;

    beforeEach(() => {
      mockProject = [
        {
          title: 'Hot pants',
          project1_name: 'Colins house',
          project2_name: 'Nicks house',
          project3_name: 'Colin and Nicks Crayons'
        }
      ];
      mockOptions = {
        method: 'POST',
        body: JSON.stringify(mockProject),
        headers: { 'Content-Type': 'application/json' }
      };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockProject)
        });
      });
    });

    it('should return a project when called', () => {
      expect(postProject(mockProject)).resolves.toEqual(mockProject);
    });

    it('should be called with the correct url and options', () => {
      postProject(mockProject);
      expect(window.fetch).toHaveBeenCalledWith('http://backend-colors.herokuapp.com/api/v1/projects', mockOptions);
    });

    it('should throw an error when response is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(postProject(mockProject)).rejects.toEqual(Error('Can not post Project'));
    });
  });

  describe('deletePalette', () => {
    let mockOptions;

    beforeEach(() => {
      mockOptions = {
        method: 'DELETE'
      };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve('Oh Hello')
        });
      });
    });

    it('should return a hard-coded message when called', () => {
      expect(deletePalette(2)).resolves.toEqual('Oh Hello');
    });

    it('should be called with the correct url and options', () => {
      deletePalette(2);
      expect(window.fetch).toHaveBeenCalledWith('http://backend-colors.herokuapp.com/api/v1/palettes/2', mockOptions)
    });

    it('should throw an error when response is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(deletePalette(3)).rejects.toEqual(Error('Could not delete that palette'));
    });
  });

  describe('deleteProject', () => {
    let mockOptions;

    beforeEach(() => {
      mockOptions = {
        method: 'DELETE'
      };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve('Oh Waddup')
        });
      });
    });

    it('should return a hard-coded message when called', () => {
      expect(deleteProject(4)).resolves.toEqual('Oh Waddup');
    });

    it('should called with correct url and options', () => {
      deleteProject(2);
      expect(window.fetch).toHaveBeenCalledWith(`http://backend-colors.herokuapp.com/api/v1/projects/2`, { method: 'DELETE' })
    })

    it('should throw an error when response is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(deleteProject(1)).rejects.toEqual(Error('Could not delete that project'));
    });
  });
});
