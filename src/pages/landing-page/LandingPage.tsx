import React from 'react';
import { LandingPageProps } from '../../types/page';
import './LandingPage.scss';
import Logo from '../../components/logo/Logo';
import AuthButton from '../../components/auth-button/AuthButton';
import Section from '../../components/section/Section';
import { Link, useNavigate } from 'react-router-dom';

const LandingPage = (props: LandingPageProps) => {

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate('/login')
  }

  const navigateRegister = () => {
    navigate('/signin')
  }

  return (
    <div className='test landing-page'>
      <div className="navbar">
        <div className="logo">
          <Logo />
        </div>
        <div className="buttons">
          <AuthButton onClick={navigateLogin} title='Login' backgroundColor='black' textColor='white' />
          <AuthButton onClick={navigateRegister} borderColor='black' title='SignIn' backgroundColor='white' textColor='black' />
        </div>
      </div>
      <div className="content">
        <h1 className="header">
          Deliver your packages anywhere, anytime, with real-time tracking and door-to-door service
        </h1>
        <h1 className="header-hide">
          Deliver your packages anywhere, anytime, with real-time tracking.
        </h1>
        <Section marginTop='30px'>
          <div className="button-div">
            <Link to="/login">
              <AuthButton title='Get Start' />
            </Link>
          </div>
        </Section>
      </div>
    </div>
  );

}

export default LandingPage;
