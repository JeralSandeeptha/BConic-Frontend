import React from 'react';
import './SingleCourier.scss';
import { SingleCourierPageProps } from '../../types/page';
import PageHeader from '../../components/page-header/PageHeader';

const SingleCourier = (props: SingleCourierPageProps) => {

  return (
    <div className='single-courier test'>
        <PageHeader
            title='Courier Details'
            subTitle='Review your courier details and manage it.'
        />
    </div>
  );

}

export default SingleCourier;
