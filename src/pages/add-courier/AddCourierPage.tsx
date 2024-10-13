import React from 'react';
import './AddCourierPage.scss';
import { AddCourierPageProps } from '../../types/page';
import BackButton from '../../components/back-button/BackButton';
import { Link } from 'react-router-dom';
import Lable from '../../components/lable/Lable';
import DashboardTextfield from '../../components/dashboard-textfield/DashboardTextfield';

const AddCourierPage = (props: AddCourierPageProps) => {

    return (
        <div className='test add-courier'>

            <div className="test single-courier-header">
                <Link to='/dashboard/my-couriers'>
                    <BackButton image='https://res.cloudinary.com/dv9ax00l4/image/upload/v1722961275/arrow-small-left_llmk3x.png' />
                </Link>
                <h6 className="test page-subtitle">Back to Couriers</h6>
            </div>

            <div className="test add-courier-content">
                <h1 className="test header">Add New Courier</h1>
                <h5 className="test subheader">Fill the details for add a new courier</h5>
                <div className="test form-container">
                    <div className="test input">
                        <Lable
                            title='First Name'
                        />
                        <DashboardTextfield
                            type='text'
                            name='fname'
                            value=""
                            placeholder='Enter pilot first name'
                            onChange={()=>{}}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Last Name'
                        />
                        <DashboardTextfield
                            type='text'
                            name='lname'
                            value=""
                            placeholder='Enter pilot last name'
                            onChange={()=>{}}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Profile Image'
                        />
                        <DashboardTextfield
                            type='text'
                            name='image'
                            value=""
                            placeholder='Enter pilot profile image url / Optional'
                            onChange={()=>{}}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Age'
                        />
                        <DashboardTextfield
                            type='text'
                            name='age'
                            value=""
                            placeholder='Enter pilot age'
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
                            value=""
                            placeholder='Enter pilot mobile number'
                            onChange={()=>{}}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Email Address'
                        />
                        <DashboardTextfield
                            type='text'
                            name='email'
                            value=""
                            placeholder='Enter pilot email address'
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
                            value=""
                            placeholder='Enter pilot address'
                            onChange={()=>{}}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Employee ID'
                        />
                        <DashboardTextfield
                            type='text'
                            name='employee_id'
                            value=""
                            placeholder='Enter pilot employee id'
                            onChange={()=>{}}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Company'
                        />
                        <DashboardTextfield
                            type='text'
                            name='company'
                            value=""
                            placeholder='Enter pilot company'
                            onChange={()=>{}}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Position'
                        />
                        <DashboardTextfield
                            type='text'
                            name='position'
                            value=''
                            placeholder='Enter pilot position'
                            onChange={()=>{}}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Click here to add pilot'
                        />
                        <button className="test add-btn" onClick={()=>{}}>Add Pilot</button>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default AddCourierPage;
