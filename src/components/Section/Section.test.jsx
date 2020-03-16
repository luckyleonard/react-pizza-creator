import React from 'react';
import { shallow } from 'enzyme';
import Section from './Section';

describe('<Section />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Section title='Title'>Test Case</Section>);
  });

  it('renders title', () => {
    expect(wrapper.find('[data-testid="title"]').text()).toBe('Title');
  });

  it('renders children', () => {
    expect(wrapper.find('[data-testid="children"]').text()).toBe('Test Case');
  });
});
