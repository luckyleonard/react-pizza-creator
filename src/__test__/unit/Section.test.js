import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Section from '../../components/Section';

describe('<Section />', () => {
  afterEach(cleanup);

  // beforeEach(() => {
  //   wrapper = shallow(<Section title='Title'>Test Case</Section>);
  // });
  const section = {
    title: 'Title',
    children: 'Test children',
  };

  test('renders title & children', () => {
    const { getByTestId } = render(
      <Section title={section.title}>{section.children}</Section>
    );
    expect(getByTestId('title')).toHaveTextContent(section.title);
    expect(getByTestId('children')).toHaveTextContent(section.children);
  });
});
