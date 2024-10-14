import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/landing-page/LandingPage';
import LoginPage from '../pages/login-page/LoginPage';
import SignInPage from '../pages/signin-page/SignInPage';
import NotFoundPage from '../pages/notfound-page/NotFoundPage';
import DashboardPage from '../pages/dashboard-page/DashboardPage';
import Profile from '../pages/profile/Profile';
import MyCouriersPage from '../pages/my-couriers/MyCouriersPage';
import AddCourierPage from '../pages/add-courier/AddCourierPage';
import SingleCourier from '../pages/single-courier/SingleCourier';
import ManageCouriers from '../pages/manage-couriers/ManageCouriers';
import SingleCourierAdmin from '../pages/single-courier-admin/SingleCourierAdmin';

const MainNavigation = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={LandingPage} />
        <Route path='/login' Component={LoginPage} />
        <Route path='/signin' Component={SignInPage} />
        <Route path='/dashboard' Component={DashboardPage}>
          <Route path='' element={<Profile />} />
          <Route path='my-couriers' element={<MyCouriersPage />} />
          <Route path='add-courier' element={<AddCourierPage />} />
          <Route path='manage-couriers' element={<ManageCouriers />} />
          <Route path='courier/:courierId' element={<SingleCourier />} />
          <Route path='courier/admin/:courierId' element={<SingleCourierAdmin />} />
        </Route>
        <Route path='*' Component={NotFoundPage} />
      </Routes>
    </BrowserRouter>
  );

}

export default MainNavigation;
