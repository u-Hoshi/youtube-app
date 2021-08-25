import { Outlet } from 'react-router-dom';
import * as React from 'react';

export const SimpleLayout = () => {
  return (
    <div>
      <h1>Simple</h1>
      <Outlet />
    </div>
  );
};
