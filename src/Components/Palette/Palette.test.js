import React from 'react';
import Palette from './Palette';
import { shallow } from 'enzyme';

describe('Palette', () => {
  it('should match the snapshot', () => {
    const mockColors = [
      {color: 'white', locked: false}
    ]
    const wrapper = shallow(<Palette
      name="waddup"
      colors={mockColors}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when there is a deletePalette function', () => {
    const mockColors = [
      {color: 'white', locked: false}
    ]
    const wrapper = shallow(<Palette
      name="waddup"
      colors={mockColors}
      deletePalette={jest.fn()}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should run deletePalette when the button is clicked', () => {
    const mockColors = [
      {color: 'white', locked: false}
    ]
    const mockDeletePalette = jest.fn();
    const wrapper = shallow(<Palette
      name="waddup"
      colors={mockColors}
      deletePalette={mockDeletePalette}
    />);

    wrapper.find('button').simulate('click');

    expect(mockDeletePalette).toHaveBeenCalledWith('waddup');
  });

  it('should match snapshot when there is a deletePaletteFromProject function', () => {
    const mockColors = [
      {color: 'white', locked: false}
    ]
    const wrapper = shallow(<Palette
      name="waddup"
      colors={mockColors}
      deletePaletteFromProject={jest.fn()}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should run deletePaletteFromProject function when button is clicked', () => {
    const mockColors = [
      {color: 'white', locked: false}
    ]
    const mockDeletePaletteFromProject = jest.fn();
    const wrapper = shallow(<Palette
      name="waddup"
      colors={mockColors}
      deletePaletteFromProject={mockDeletePaletteFromProject}
    />);

    wrapper.find('button').simulate('click');

    expect(mockDeletePaletteFromProject).toHaveBeenCalledWith('waddup');
  });
})
