import React from 'react';
import renderer from 'react-test-renderer';
import AdminUsers from '../components/admin-users';
import { BrowserRouter } from 'react-router-dom';

it('admin user page correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
            <AdminUsers />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });