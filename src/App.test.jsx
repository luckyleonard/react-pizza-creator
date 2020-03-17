import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<APP />', () => {
  it('state is initialized', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.detail).toBeFalsy();
    expect(wrapper.verified).toBeFalsy();
    expect(wrapper.size).toBeFalsy();
    expect(wrapper.toppings).toBeFalsy();
  });
});
