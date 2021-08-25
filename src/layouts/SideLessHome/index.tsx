import { Outlet } from 'react-router-dom';
import * as React from 'react';
import { DashboradHeader } from '../../templates/DashbordHeader';

export const SideLessHomeLayout = () => {
  return (
    <div>
      <DashboradHeader />
      <Outlet />
    </div>
  );
};
