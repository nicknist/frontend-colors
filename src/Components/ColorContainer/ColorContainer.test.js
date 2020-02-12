import React from 'react';
import ColorContainer from './ColorContainer';
import { shallow, mount } from 'enzyme';
import { getFiveRandomColors } from '../../helperFunctions';
import { postPalette, deletePalette, postProject } from '../../apiCalls';
jest.mock('../../helperFunctions');
jest.mock('../../apiCalls')

describe('ColorContainer', () => {
  beforeEach(() => {
    getFiveRandomColors.mockImplementation(() => [
      { color: 'blue', locked: false },
      { color: 'scott', locked: true },
      { color: 'white', locked: false },
      { color: 'fosterBlue', locked: true },
      { color: 'scottPurple', locked: false }
    ]);
    postPalette.mockImplementation(() => Promise.resolve({
      title: 'TEST POST PALETTE',
      color1: '#867CBC',
      color2: '#E2F7EF',
      color3: '#23889A',
      color4: '#A6E508',
      color5: '#D15120'
    }));
    deletePalette.mockImplementation(() => Promise.resolve('Oh Hello'))
    postProject.mockImplementation(() => Promise.resolve({
      title: 'Hot pants',
      project1_name: 'Colins house',
      project2_name: 'Nicks house',
      project3_name: 'Colin and Nicks Crayons'
    }));
  });

  it('should match the snapshot when there are no palettes', () => {
    const wrapper = shallow(<ColorContainer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when there are palettes', () => {
    const wrapper = shallow(<ColorContainer />);
    wrapper.find('.add-palette').simulate('click');
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('should run getFiveRandomColors when randomizer button is clicked', () => {
    const wrapper = shallow(<ColorContainer />);
    wrapper.find('.randomizer').at(0).simulate('click');
    expect(getFiveRandomColors).toHaveBeenCalled();
  })

  it('should change the state when the palette name input is updated', async () => {
    const wrapper = mount(<ColorContainer />);
    const mockEvent = {
      preventDefault: jest.fn(),
      target: {
        value: 'DID IT'
      }
    }
    wrapper.find('.palette-name').simulate('change', { target: { value: 'waddup' } });

    expect(wrapper.find('.palette-name').prop('value')).toEqual('waddup');
  });
});
