import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/landing-page/LandingPage';
import LoginPage from '../pages/login-page/LoginPage';
import SignInPage from '../pages/signin-page/SignInPage';
import NotFoundPage from '../pages/notfound-page/NotFoundPage';

const MainNavigation = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={LandingPage}/>
            <Route path='/login' Component={LoginPage}/>
            <Route path='/signin' Component={SignInPage}/>
            <Route path='*' Component={NotFoundPage}/>
        </Routes>
    </BrowserRouter>
  );

}

export default MainNavigation;
