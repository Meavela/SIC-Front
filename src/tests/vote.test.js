import React from 'react';
import renderer from 'react-test-renderer';
import Questions from '../components/list-question';
import Result from '../components/result';
import Navbar from '../components/navbar-component';
import { BrowserRouter } from 'react-router-dom';

it('test questions list', () => {
  const tree = renderer
    .create(<Questions />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('test results', () => {
  const tree = renderer
    .create(<Result />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('test navbar', () => {
  const tree = renderer
    .create(<BrowserRouter><Navbar /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});