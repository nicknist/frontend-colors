import React from 'react';
import { shallow } from 'enzyme';
import PaletteContainer from './PaletteContainer';

describe('Palette Container', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<PaletteContainer
      palettes={[ {
          colors: [ { color: 'john' }],
          name: 'ben',
        }
      ]}
      deletePalette={jest.fn()}
    />)
    expect(wrapper).toMatchSnapshot();
  })
})
