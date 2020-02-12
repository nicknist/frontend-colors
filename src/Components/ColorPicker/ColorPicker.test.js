import React from 'react';
import ColorPicker from './ColorPicker';
import { shallow } from 'enzyme';

describe('ColorPicker', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show the colorPicker when the div color-rectangle is clicked', () => {
    const wrapper = shallow(<ColorPicker />);
    wrapper.find('.color-rectangle').simulate('click');
    wrapper.update();

    expect(wrapper).toMatchSnapshot();
  });

  it('should close the colorPicker when the no-hover div is clicked', () => {
    const wrapper = shallow(<ColorPicker />);
    wrapper.find('.color-rectangle').simulate('click');
    wrapper.update();

    wrapper.find('.no-hover').simulate('click');
    wrapper.update();

    expect(wrapper).toMatchSnapshot();
  });

  it('should run handleChange when the ChromePicker has hit onChangeComplete', () => {
    const mockHandleChange = jest.fn();
    const fakeEvent = () => {};
    const wrapper = shallow(<ColorPicker handleChange={mockHandleChange}/>);
    wrapper.find('.color-rectangle').simulate('click');
    wrapper.update();

    wrapper.find('.chrome-picker').prop('onChangeComplete')(fakeEvent);
    wrapper.update();

    expect(mockHandleChange).toHaveBeenCalled();
  });

  it('should match snapshot when locked is true', () => {
    const wrapper = shallow(<ColorPicker locked={true}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should run lock function when lock className is clicked', () => {
    const mockLock = jest.fn();
    const wrapper = shallow(<ColorPicker locked={true} lock={mockLock}/>);
    wrapper.find('.lock').simulate('click');

    expect(mockLock).toHaveBeenCalled();
  });

  it('should run lock function when unlock className is clicked', () => {
    const mockLock = jest.fn();
    const wrapper = shallow(<ColorPicker locked={false} lock={mockLock}/>);
    wrapper.find('.unlock').simulate('click');

    expect(mockLock).toHaveBeenCalled();
  })
})
