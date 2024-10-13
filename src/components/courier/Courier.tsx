import React from 'react'
import { Link } from 'react-router-dom';
import './Courier.scss';
import { CourierProps } from '../../types/component';

const Courier = (props: CourierProps) => {

  return (
    <Link to={`/dashboard/courier/${props._id}`}>
        <div className="test courier">
            <div className="test header">
                <h5 className="test header-text">Name</h5>
            </div>
            <div className="test header">
                <h5 className="test header-text">Name</h5>
            </div>
            <div className="test header">
                <h5 className="test header-text">Name</h5>
            </div>
            <div className="test header">
                <h5 className="test header-text">Name</h5>
            </div>
        </div>
    </Link>
  );

}

export default Courier;
