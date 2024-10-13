import React from 'react';
import './NoData.scss';
import Lottie from 'lottie-react';
import animationData from '../../assets/lotties/no-data.json';
import { NoDataProps } from '../../types/component';

const NoData = (props: NoDataProps) => {

  return (
    <div className='test no-data'>
        <Lottie animationData={animationData} loop={true} className='anim'/>
        <p className='test no-data-text'>{props.message}</p>
    </div>
  );

}

export default NoData;