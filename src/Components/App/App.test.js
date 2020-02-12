import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
// import { getProjects } from '../../apiCalls';
// jest.mock('../../apiCalls');

describe('App', () => {
  // beforeEach(() => {
  //   getProjects.mockImplementation(() => Promise.resolve({}))
  // });

  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  // it('should run getProjects when component mounts', () => {
  //   const wrapper = shallow(<App />);
  //   expect(getProjects).toHaveBeenCalled();
  // });
})
