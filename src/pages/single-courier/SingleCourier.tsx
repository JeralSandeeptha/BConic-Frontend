import React, { useEffect, useState } from 'react';
import './SingleCourier.scss';
import { SingleCourierPageProps } from '../../types/page';
import { Link, useParams } from 'react-router-dom';
import { IGetCourier } from '../../types/model';
import getCourier from '../../api/courier-endpoints/getCourier';
import BackButton from '../../components/back-button/BackButton';
import Lottie from 'lottie-react';
import animationData1 from '../../assets/lotties/ongoing.json';
import animationData3 from '../../assets/lotties/accept-order.json';
import animationData2 from '../../assets/lotties/review.json';
import animationData4 from '../../assets/lotties/ok.json';

const SingleCourier = (props: SingleCourierPageProps) => {

  const [courier, setCourier] = useState<IGetCourier>();

  const { courierId } = useParams();

  const getSingleCourier = () => {
    getCourier({
      courierId: courierId,
      setCourier: setCourier,
    });
  }

  useEffect(() => {
    getSingleCourier();
  }, []);

  return (
    <div className='single-courier test'>

      <div className="test-single-courier-header">
        <Link to='/dashboard/my-couriers'>
          <BackButton image='https://res.cloudinary.com/dv9ax00l4/image/upload/v1722961275/arrow-small-left_llmk3x.png' />
        </Link>
        <h6 className="test page-subtitle">Back to Couriers</h6>
      </div>

      <div className="test single-courier-content">

        <div className="test upper">
          <h6 className="test code">Courier Tracking Number</h6>
          <h1 className="test name">{courier?.tracking_number}</h1>
        </div>

        <div className="test upper">
          <h6 className="test code">Courier ID</h6>
          <h2 className="test name">{courier?.courier_id}</h2>
        </div>

        <div className="test middle">
          <div className="test middle-left">
            <div className="test info-container">
              <h6 className="test info-lable">Sender Name:</h6>
              {
                courier?.sender_name ? (
                  <h6 className="test info">{courier?.sender_name}</h6>
                ) : (
                  <h6 className="test info">Not Set</h6>
                )
              }
            </div>
            <div className="test info-container">
              <h6 className="test info-lable">Sender Address:</h6>
              {
                courier?.sender_address ? (
                  <h6 className="test info">{courier?.sender_address}</h6>
                ) : (
                  <h6 className="test info">Not Set</h6>
                )
              }
            </div>
            <div className="test info-container">
              <h6 className="test info-lable">Recepient Name:</h6>
              {
                courier?.recipient_name ? (
                  <h6 className="test info">{courier?.recipient_name}</h6>
                ) : (
                  <h6 className="test info">Not Set</h6>
                )
              }
            </div>
            <div className="test info-container">
              <h6 className="test info-lable">Recepient Address:</h6>
              {
                courier?.recipient_address ? (
                  <h6 className="test info">{courier?.recipient_address}</h6>
                ) : (
                  <h6 className="test info">Not Set</h6>
                )
              }
            </div>
            <div className="test info-container">
              <h6 className="test info-lable">Additional Info:</h6>
              {
                courier?.recipient_address ? (
                  <h6 className="test info">{courier?.additional_info}</h6>
                ) : (
                  <h6 className="test info">Not Set</h6>
                )
              }
            </div>
            <div className="test info-container">
              <h6 className="test info-lable">Order Placed:</h6>
              {
                courier?.recipient_address ? (
                  <h6 className="test info">{courier?.created_at}</h6>
                ) : (
                  <h6 className="test info">Not Set</h6>
                )
              }
            </div>
            <div className="test info-container">
              <h6 className="test info-lable">Last :</h6>
              {
                courier?.recipient_address ? (
                  <h6 className="test info">{courier?.updated_at}</h6>
                ) : (
                  <h6 className="test info">Not Set</h6>
                )
              }
            </div>
            <div className="test info-container">
              <h6 className="test info-lable">Status :</h6>
              {
                courier?.recipient_address ? (
                  <h6 className="test info">{courier?.status}</h6>
                ) : (
                  <h6 className="test info">Not Set</h6>
                )
              }
            </div>
          </div>
        </div>

        <div className="anim-container">
          {
            courier?.status == 'Order Placed' && (
              <Lottie animationData={animationData1} className='test anim' />
            )
          }
          {
            courier?.status == 'Delivered' && (
              <Lottie animationData={animationData2} className='test anim' />
            )
          }
          {
            courier?.status == 'Picked Up' && (
              <Lottie animationData={animationData3} className='test anim' />
            )
          }
          {
            courier?.status == 'CANCELLED' && (
              <Lottie animationData={animationData4} className='test anim' />
            )
          }
        </div>

      </div>
    </div>
  );

}

export default SingleCourier;
