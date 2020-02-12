import React from 'react';
import Project from './Project';
import { shallow } from 'enzyme';
import { deleteProject, getPalette } from '../../apiCalls';
jest.mock('../../apiCalls');

describe('Project', () => {
  let mockInfo;
  let wrapper;
  let mockPalette;

  beforeEach(() => {
    mockPalette = {
      title: 'waddup'
    }
    deleteProject.mockImplementation(() => {});
    getPalette.mockImplementation(() => mockPalette)
    mockInfo = {
      name: 'colin',
      palette1_id: 1,
      palette2_id: 2,
      palette3_id: 3,
    }
    wrapper = shallow(<Project info={mockInfo}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should run deleteProject when delete-project button is clicked', () => {
    wrapper.find('.delete-project').simulate('click');
    expect(deleteProject).toHaveBeenCalled();
  });
})
