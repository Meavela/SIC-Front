import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../components/login';

it('login page correctly', () => {
    const tree = renderer
      .create(<Login />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });