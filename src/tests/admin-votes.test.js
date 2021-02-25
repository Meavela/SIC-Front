import React from 'react';
import renderer from 'react-test-renderer';
import AdminVotes from '../components/admin-votes';
import { BrowserRouter } from 'react-router-dom';

it('admin votes page correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
            <AdminVotes />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });