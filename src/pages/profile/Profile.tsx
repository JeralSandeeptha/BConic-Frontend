import React, { useContext, useEffect, useState } from 'react';
import './Profile.scss';
import PageHeader from '../../components/page-header/PageHeader';
import { Tooltip } from '@mui/material';
import Lable from '../../components/lable/Lable';
import DashboardTextfield from '../../components/dashboard-textfield/DashboardTextfield';
import { useNavigate } from 'react-router-dom';
import { ProfilePageProps } from '../../types/page';

const Profile = (props: ProfilePageProps) => {

  const navigate = useNavigate();

  return (
    <div className='profile'>
      <PageHeader
        title='Profile'
        subTitle='Here is your profile. Update and manage your profile details.'
      />

      <div className="profile-section">
        <div className="banner"></div>
        <div className="name-container">
          <div className="test name-container-left">
            <div className="test profile-image-container">
              <Tooltip title="Profile Image" arrow>
                <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1723890106/user-profile-img-removebg-preview_rlafow.png" alt="profile-img" className="test profile-image" />
              </Tooltip>
            </div>
          </div>
          <div className="test name-container-right">
            <Tooltip title="User Name" arrow>
              <h1 className="test name">Jeral Sandeeptha</h1>
            </Tooltip>
            <Tooltip title="User Id" arrow>
              <h5 className="test userId">Your UserID: 1</h5>
            </Tooltip>
          </div>
        </div>
        <div className="test user-description-section">
          <h3 className="test email">jeral.sandeeptha1@gmail.com</h3>
          <h6 className="test description">Update your description to show here</h6>
        </div>
        <div className="test section1">
          <div className="test section1-left">
            <h3 className="test lable">Your Profile</h3>
            <h6 className="test sub-lable">Update your user profile and details here</h6>
          </div>
          <div className="test section1-right">
            <Tooltip title="Click here to save your changes" arrow>
              <button className="test save-button" onClick={()=>{}}>Save Changes</button>
            </Tooltip>
          </div>
        </div>
        <div className="test section2">
          <div className="test section2-left">
            <div className="test input">
              <Lable 
                title='First Name'
              />
              <DashboardTextfield 
                type='text'
                name='fname'
                value='fname'
                placeholder='Enter your first name'
                onChange={()=>{}}
              />
            </div>
            <div className="test input">
              <Lable 
                title='Address'
              />
              <DashboardTextfield 
                type='text'
                name='address'
                value='address'
                placeholder='Enter your address'
                onChange={()=>{}}
              />
            </div>
          </div>
          <div className="test section2-left">
            <div className="test input">
              <Lable 
                title='Last Name'
              />
              <DashboardTextfield 
                type='text'
                name='lname'
                value='lname'
                placeholder='Enter your Last name'
                onChange={()=>{}}
              />
            </div>
            <div className="test input">
              <Lable 
                title='Mobile'
              />
              <DashboardTextfield 
                type='text'
                name='mobile'
                value='mobile'
                placeholder='Enter your mobile'
                onChange={()=>{}}
              />
            </div>
          </div>
        </div>

        <hr className='test hard-line'/>

        <div className="test logout-section">
          <Tooltip title="Logout" arrow>
            <button className="test logout-container" onClick={()=>{}}>
                <h5 className="test btn-text">Logout</h5>
            </button>
          </Tooltip>
        </div>
        
      </div>
    </div>
  );
}

export default Profile;
