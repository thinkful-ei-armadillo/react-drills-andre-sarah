import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Accordian from './Accordian';
import { sections } from '../store';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Testing accordian', () => {
  //snapshot test
  it('component renders an empy li when the sections prop is not supplied', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordian sections={sections} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('component renders no sections as active by default', () => {
    const tree = renderer
      .create(<Accordian sections={sections} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('component opens a clicked section', () => {
    const wrapper = shallow(<Accordian sections={sections} />);
    wrapper.find('button').at(1).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('component only opens the last section when multiple sections have been clicked', () => {
    const wrapper = shallow(<Accordian sections={sections} />);
    wrapper.find('button').at(1).simulate('click');
    wrapper.find('button').at(2).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});