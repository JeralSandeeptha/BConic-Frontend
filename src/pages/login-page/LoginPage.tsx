import React, { useContext, useState } from 'react';
import './LoginPage.scss';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/Logo';
import Section from '../../components/section/Section';
import RoundedIcon from '../../components/rounded-icon/RoundedIcon';
import QuoteText from '../../components/quote-text/QuoteText';
import AuthSubHeader from '../../components/auth-subheader/AuthSubHeader';
import LoadingPage from '../loading-page/LoadingPage';
import AuthHeader from '../../components/auth-header/AuthHeader';
import Lable from '../../components/lable/Lable';
import Textfield from '../../components/textfield/Textfield';
import AuthButton from '../../components/auth-button/AuthButton';
import { LoginPageProps } from '../../types/page';

const LoginPage = (props: LoginPageProps) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  return (
    <div className='test login-page'>
      <div className="test login-page-left">
        <div className='test top-content'>
          <RoundedIcon 
            image='https://res.cloudinary.com/dv9ax00l4/image/upload/v1721331226/community_krwrjo.png'
          />
          <div className='test logo-content'>
            <h3 className='logo-content-text'>Largest Courier Service</h3>
            <h3 className='logo-content-text'>Community</h3>
          </div>
        </div>
        <div className='test bottom-content'>
          <h1 className='test quote'>"</h1>
          <QuoteText quote='Courier anywhere you want'/>
          <QuoteText quote='We deliver it fast'/>
        </div>
      </div>
      <div className="test login-page-right">

        <div className="test login-page-right-inner">

          <div className='test logo-container'>
            <Link to='/'>
              <Logo />
            </Link> 
          </div>

          <AuthHeader title="Welcome Back!"/>

          <Section marginBottom='20px' marginTop='20px'>
            <AuthSubHeader 
              message='Please login to access to your account'
              color='#989898'
              textAlign='center'
            />
          </Section>

          <div className='test text-field-section'>
            <Lable title='Email'/>
            <Textfield 
              placeholder='Enter your email address'
              type='email'
              value={email}
              onChange={() => {}}
            />
          </div>
          
          <div className='test text-field-section'>
            <Lable title='Password'/>
            <Textfield 
              placeholder='Enter your password'
              type='password'
              value={password}
              onChange={() => {}}
            />
          </div>

          <AuthButton title='Login' backgroundColor='#000' textColor='#fff' />

          <Section marginTop='20px' marginBottom='10px'>
            {/* <Link to='/forgot-password'>
              <AuthSubHeader message='Forgot Password?' color='#359AE3' textAlign='center' fontWeight={800}/>
            </Link> */}
          </Section>

          <div className='test register-section'>
            <AuthSubHeader message='Dont have an account ?' color='#000000' textAlign='center'/>
            <Link to='/signin'>
              <AuthSubHeader message='Register' color='#359AE3' fontWeight={800} textAlign='center'/>
            </Link>
          </div>

          {
            loading && <LoadingPage />
          }

        </div>
      </div>
    </div>
  )
}

export default LoginPage