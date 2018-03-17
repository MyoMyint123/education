import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '../../components/Sidebar';

test('should render Sidebar correctly', () => {
  const wrapper = shallow(<Sidebar />);
  expect(wrapper).toMatchSnapshot();
});
