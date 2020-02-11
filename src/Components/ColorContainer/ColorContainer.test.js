import React from 'react';
import ColorContainer from './ColorContainer';
import { shallow, mount } from 'enzyme';
import { getFiveRandomColors } from '../../helperFunctions';
jest.mock('../../helperFunctions');

describe('ColorContainer', () => {
  beforeEach(() => {
    getFiveRandomColors.mockImplementation(() => [
      { color: 'blue', locked: false },
      { color: 'scott', locked: true },
      { color: 'white', locked: false },
      { color: 'fosterBlue', locked: true },
      { color: 'scottPurple', locked: false }
    ]);
  })
  it('should match the snapshot when there are no palettes', () => {
    const wrapper = shallow(<ColorContainer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when there are palettes', () => {
    const wrapper = shallow(<ColorContainer />);
    wrapper.find('.add-palette').simulate('click');
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

})
