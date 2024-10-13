import React from 'react';
import './DashboardPage.scss';
import { Outlet } from 'react-router-dom';
import SideNavigation from '../../components/side-navigation/SideNavigation';
import { DashboardPageProps } from '../../types/page';

const DashboardPage = (props: DashboardPageProps) => {

  return (
    <div className='test dashboard'>
      <SideNavigation />
      <Outlet />
    </div>
  );

}

export default DashboardPage;