import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  })
})
