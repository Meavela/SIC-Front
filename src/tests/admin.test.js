import React from 'react';
import renderer from 'react-test-renderer';
import Admin from '../components/admin';
import { BrowserRouter } from 'react-router-dom';

it('admin page correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
            <Admin />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });