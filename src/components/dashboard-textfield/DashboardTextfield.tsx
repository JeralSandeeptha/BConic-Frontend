import React from 'react';
import './DashboardTextfield.scss';
import { DashboardTextfieldProps } from '../../types/component';

const DashboardTextfield: React.FC<DashboardTextfieldProps> = ({ disable, type, name, value, placeholder, onChange, isDescription }) => {
  return (
    <input
      style={{
        height: isDescription ? '150px' : ''
      }}
      className='test text-field' 
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange} 
      disabled={disable}
    />
  );
};

export default DashboardTextfield;
  