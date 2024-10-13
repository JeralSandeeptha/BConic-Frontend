import React from 'react';
import './LoadingIcon.scss';
import animationData from '../../assets/lotties/loading.json';
import Lottie from 'lottie-react';

const LoadingIcon = () => {

    return (
        <div className="test animated-logo">
            <Lottie animationData={animationData} className='test anim' />
        </div>
    );

}

export default LoadingIcon;