import React, { useState } from 'react';
import './MyCouriersPage.scss';
import { MyCouriersPageProps } from '../../types/page';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/page-header/PageHeader';
import AuthButton from '../../components/auth-button/AuthButton';
import Courier from '../../components/courier/Courier';
import NoData from '../../components/no-data/NoData';

const MyCouriersPage = (props: MyCouriersPageProps) => {

    const [courieres, setCourieres] = useState([

    ]);

    return (
        <div className='test mycouriers'>

            <PageHeader
                title='My Couriers'
                subTitle='All Your Couriers. Track, update and manage your couriers.'
            />

            <div className="test search-section">
                <div className="test searchbar">
                    <input
                        type="text"
                        placeholder="Search your couriers"
                        className="test search-input"
                        value=""
                        onChange={() => { }}
                    />
                    <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1722774870/icons8-search-480_msptia.png" alt="search-logo" className="test search-logo" />
                </div>
                <Link to='/dashboard/add-courier' className='test add-mycouriers-btn-link'>
                    <button className='test add-mycouriers-btn'>
                        Add Courier
                    </button>
                </Link>
            </div>

            <div className="test search-results">
                <h6 className="test search-results-text">Search Results : <span className='test result-count'>23</span></h6>
            </div>

            <div className="test mycouriers-table">
                <div className="test table-header">
                    <div className="test header">
                        <h5 className="test header-text">Name</h5>
                    </div>
                    <div className="test header">
                        <h5 className="test header-text">Company</h5>
                    </div>
                    <div className="test header">
                        <h5 className="test header-text">Mobile</h5>
                    </div>
                    <div className="test header">
                        <h5 className="test header-text">Email Address</h5>
                    </div>
                </div>
                <div className="test table-body">
                    {
                        courieres.length === 0 ? <NoData message='No couriers data available' /> :
                            courieres.map((courier, index) => {
                                return (
                                    <Courier
                                        key={index}
                                    />
                                )
                            })
                    }
                </div>

            </div>

        </div>
    );

}

export default MyCouriersPage;
