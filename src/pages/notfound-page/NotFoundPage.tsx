import React from 'react';
import './NotFoundPage.scss';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import animationData from '../../assets/lotties/not-found.json';
import { NotFoundPageProps } from '../../types/page';
import AuthHeader from '../../components/auth-header/AuthHeader';

const NotFoundPage = (props: NotFoundPageProps) => {

  return (
    <div className='test notfound'>
      <div className="test notfound-inner">
        <Lottie animationData={animationData} className='test anim' />
        <AuthHeader title='Not Found' />
        <Link to='/' className='test link'>
          <h5 className='test notfound-text'>Back to Home</h5>
        </Link>
      </div>
    </div>
  );

}

export default NotFoundPage;