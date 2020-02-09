import React from 'react';
import ProjectContainer from './ProjectContainer';
import { shallow } from 'enzyme';

describe('ProjectContainer', () => {
  it('should match the snapshot', () => {
    const mockProjects = [
      { name: 'PROJECT 1',
        palettes: [
        { name: 'NUMBAH1',
          colors: [
            { color: 'white', locked: false },
            { color: 'blue', locked: false },
            { color: 'red', locked: false },
            { color: 'orange', locked: false },
            { color: 'rebeccapurple', locked: false }
          ]
        }
      ]
      }
    ]
    const wrapper = shallow(<ProjectContainer projects={mockProjects}/>)
    expect(wrapper).toMatchSnapshot();
  })
})
