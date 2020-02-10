import React from 'react';
import Project from './Project';
import { shallow } from 'enzyme';

describe('Project', () => {
  it('should match the snapshot', () => {
    const mockInfo = {
      name: 'colin',
      palettes: [
        {
          colors: [ { color: 'blue', locked: false }],
          name: 'nick'
        }
      ]
    }
    const wrapper = shallow(<Project info={mockInfo}/>);

    expect(wrapper).toMatchSnapshot();
  })
})
