import React from 'react';
import './AuthHeader.scss';
import { AuthHeaderProps } from '../../types/component';

const AuthHeader = (props: AuthHeaderProps) => {

  return (
    <h1 className='test auth-header'>{props.title}</h1>
  );

}

export default AuthHeader;