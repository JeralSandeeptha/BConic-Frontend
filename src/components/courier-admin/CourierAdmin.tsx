import React from 'react'
import { Link } from 'react-router-dom';
import './CourierAdmin.scss';
import { IGetCourier } from '../../types/model';

const CourierAdmin = (props: IGetCourier) => {

    return (
        <Link to={`/dashboard/courier/admin/${props.courier_id}`}>
            <div className="test courier-admin">
                <div className="test header">
                    <h5 className="test header-text">{props.tracking_number}</h5>
                </div>
                <div className="test header">
                    <h5 className="test header-text">{props.sender_name}</h5>
                </div>
                <div className="test header">
                    <h5 className="test header-text">{props.recipient_name}</h5>
                </div>
                <div className="test header">
                    <h5 className="test header-text">{props.created_at}</h5>
                </div>
                <div className="test header">
                    <h5 className="test header-text">{props.status}</h5>
                </div>
            </div>
        </Link>
    );

}

export default CourierAdmin;
