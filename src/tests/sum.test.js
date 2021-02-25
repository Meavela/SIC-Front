import React from 'react';
import renderer from 'react-test-renderer';
import Questions from '../components/list-question';

it('test', () => {
  const tree = renderer
    .create(<Questions />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});