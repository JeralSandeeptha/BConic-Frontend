import React, { useContext, useEffect, useState } from 'react';
import './Profile.scss';
import PageHeader from '../../components/page-header/PageHeader';
import { Tooltip } from '@mui/material';
import Lable from '../../components/lable/Lable';
import DashboardTextfield from '../../components/dashboard-textfield/DashboardTextfield';
import { useNavigate } from 'react-router-dom';
import { ProfilePageProps } from '../../types/page';
import { TokenContext } from '../../context/TokenContext';
import { IdContext } from '../../context/UserIdContext';
import { UpdateUser, User } from '../../types/model';
import { RoleContext } from '../../context/RoleContext';
import getSingleUser from '../../api/user-service/getUser';
import Alert from '../../components/alert/Alert';
import updateUser from '../../api/user-service/updateUser';

const Profile = (props: ProfilePageProps) => {

  const [user, setUser] = useState<User | undefined>(undefined);
  const [formData, setFormData] = useState<UpdateUser>();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [statusCode, setStatusCode] = useState(0);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const idContext = useContext(IdContext);
  const id = idContext?.id;
  const clearId = idContext?.clearId;
  if (!id) {
    throw new Error('Id context is not available');
  }

  const tokenContext = useContext(TokenContext);
  if (!tokenContext) {
    throw new Error('Token context is not available');
  }
  const { clearToken, token } = tokenContext;

  const roleContext = useContext(RoleContext);
  if (!roleContext) {
    throw new Error('Role context is not available');
  } 
  const { role, clearRole } = roleContext;

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      clearToken();
      if (clearId) {
        clearId();
      }
      clearRole();
      navigate('/login');
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdateUser = () => {
    updateUser({
      id: id,
      setUser: setUser,
      setFormData: setFormData,
      formData: formData,
      setError: setError,
      setSuccess: setSuccess,
      setMessage: setMessage,
      setStatusCode: setStatusCode,
      getSingleUser: getSingleUser,
      token: token || ''
    });
  }

  const getUserInfor = () => {
    getSingleUser({
      setUser: setUser,
      setFormData: setFormData,
      id: id,
      token: token || ''
    });
  }

  useEffect(() => {
    getUserInfor();
  }, []);

  return (
    <div className='profile'>

      <PageHeader
        title='Profile'
        subTitle='Here is your profile. Update and manage your profile details.'
      />

      {
        error && <Alert
          message={message}
          statusCode={statusCode}
          type='error'
        />
      }
      {
        success && <Alert
          message={message}
          statusCode={statusCode}
          type='success'
        />
      }

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
              <div className="div">
                <h1 className="test name">{user?.first_name && user?.last_name ? `${user?.first_name} ${user?.last_name}` : user?.email}</h1>
                <h5 
                  className="test role"
                  style={{
                    backgroundColor: user?.role == 'user' ? 'green' : 'red'
                  }}
                >{user?.role}</h5>
              </div>
            </Tooltip>
            <Tooltip title="User Id" arrow>
              <h5 className="test userId">Your UserID: {user?.user_id}</h5>
            </Tooltip>
          </div>
        </div>
        <div className="test user-description-section">
          <h3 className="test email">{user?.email}</h3>
        </div>
        <div className="test section1">
          <div className="test section1-left">
            <h3 className="test lable">Your Profile</h3>
            <h6 className="test sub-lable">Update your user profile and details here</h6>
          </div>
          <div className="test section1-right">
            <Tooltip title="Click here to save your changes" arrow>
              <button className="test save-button" onClick={handleUpdateUser}>Save Changes</button>
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
                name='first_name'
                value={formData?.first_name || ''}
                placeholder='Enter your first name'
                onChange={handleChange}
              />
            </div>
            <div className="test input">
              <Lable
                title='Address'
              />
              <DashboardTextfield
                type='text'
                name='address'
                value={formData?.address || ''}
                placeholder='Enter your address'
                onChange={handleChange}
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
                name='last_name'
                value={formData?.last_name || ''}
                placeholder='Enter your Last name'
                onChange={handleChange}
              />
            </div>
            <div className="test input">
              <Lable
                title='Mobile'
              />
              <DashboardTextfield
                type='text'
                name='mobile'
                value={formData?.mobile || ''}
                placeholder='Enter your mobile'
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <hr className='test hard-line' />

        <div className="test logout-section">
          <Tooltip title="Logout" arrow>
            <button className="test logout-container" onClick={handleLogout}>
              <h5 className="test btn-text">Logout</h5>
            </button>
          </Tooltip>
        </div>

      </div>
    </div>
  );
}

export default Profile;
