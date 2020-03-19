import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import DetailForm from './components/DetailForm';
import SizeSelector from './components/SizeSelector';
import ToppingSelector from './components/ToppingSelector';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('passes details to <DetailForm />', () => {
    const detail = {
      name: 'Leonard'
    };

    wrapper.setDetail(detail);

    expect(wrapper.find(DetailForm).prop('detail')).toEqual(detail);
  });

  it('passes new details to <DetailForm /> by calling onDetailsChange', () => {
    const { handleDetail } = wrapper.find(DetailForm).props();

    const e = { target: { name: 'name', value: 'JR' } };
    const value = { name: 'JR' };
    handleDetail(e);

    expect(wrapper.find(DetailForm).prop('detail')).toEqual(value);
  });

  it('pass selectedSize to <SizeSelector />', () => {
    const size = { size: 3, label: 'Small (9")', price: 9.99 };

    wrapper.setSize(size);

    expect(wrapper.find(SizeSelector).prop(size)).toEqual(size);
  });
});
