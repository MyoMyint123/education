import React from 'react';
import { shallow } from 'enzyme';
import SidebarMenu from '../../components/Menu/SidebarMenu';
import menuItems from '../fixtures/menu-items';

describe('SidebarMenu', () => {
  let history;
  beforeEach(() => {
    history = { push: jest.fn() }
  });

  test('should render SidebarMenu correctly with items', () => {
    const wrapper = shallow(<SidebarMenu  menus={menuItems} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render SidebarMenu without items', () => {
    const wrapper = shallow(<SidebarMenu menus={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

});
