import React from 'react';
import './Lable.scss';
import { LableProps } from '../../types/component';

const Lable = (props: LableProps) => {

  return (
    <div className='test lable'>
        {props.title}
    </div>
  );

}

export default Lable;