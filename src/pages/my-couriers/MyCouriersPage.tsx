import React, { useContext, useEffect, useState } from 'react';
import './MyCouriersPage.scss';
import { MyCouriersPageProps } from '../../types/page';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/page-header/PageHeader';
import Courier from '../../components/courier/Courier';
import NoData from '../../components/no-data/NoData';
import { IGetCourier } from '../../types/model';
import { IdContext } from '../../context/UserIdContext';
import getAllCouriersByUserId from '../../api/courier-endpoints/getAllCouriersByUserId';
import COURIER_STATUS from '../../types/enum';
import { TokenContext } from '../../context/TokenContext';

const MyCouriersPage = (props: MyCouriersPageProps) => {

    const [courieres, setCourieres] = useState<IGetCourier[]>([]);
    const [filteredCouriers, setFilteredCouriers] = useState<IGetCourier[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedStatus, setSelectedStatus] = useState<string>('');

    const idContext = useContext(IdContext);
    if (!idContext) {
        throw new Error('My Couriers Page must be used within a IdProvider');
    }
    const { id } = idContext;

    const tokenContext = useContext(TokenContext);
    const token = tokenContext?.token;

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const getCouriers = () => {
        getAllCouriersByUserId({
            userId: id,
            setCourieres: setCourieres,
            token: token || ''
        });
    }

    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedStatus(event.target.value);
    };

    useEffect(() => {
        getCouriers();
    }, []);

    useEffect(() => {
        const results = courieres.filter((courier) =>
            courier.sender_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            courier.sender_address?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            courier.recipient_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            courier.recipient_address?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            courier.status?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            courier.courier_id
        );
        setFilteredCouriers(results);
    }, [searchTerm, courieres]);

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
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1722774870/icons8-search-480_msptia.png" alt="search-logo" className="test search-logo" />
                </div>
                <div className="test search-option-section">
                    <select id="options" className='options test' value={selectedStatus} onChange={handleStatusChange}>
                        <option value={COURIER_STATUS.ORDER_PLACED} className='test option'>{COURIER_STATUS.ORDER_PLACED}</option>
                        <option value={COURIER_STATUS.PICKED_UP} className='test option'>{COURIER_STATUS.PICKED_UP}</option>
                        <option value={COURIER_STATUS.IN_TRANSIT} className='test option'>{COURIER_STATUS.IN_TRANSIT}</option>
                        <option value={COURIER_STATUS.OUT_FOR_DELIVERY} className='test option'>{COURIER_STATUS.OUT_FOR_DELIVERY}</option>
                        <option value={COURIER_STATUS.ATTEMPTED_DELIVERY} className='test option'>{COURIER_STATUS.ATTEMPTED_DELIVERY}</option>
                        <option value={COURIER_STATUS.RETURNED_TO_SENDER} className='test option'>{COURIER_STATUS.RETURNED_TO_SENDER}</option>
                        <option value={COURIER_STATUS.ON_HOLD} className='test option'>{COURIER_STATUS.ON_HOLD}</option>
                        <option value={COURIER_STATUS.CANCELLED} className='test option'>{COURIER_STATUS.CANCELLED}</option>
                        <option value={COURIER_STATUS.DELAYED} className='test option'>{COURIER_STATUS.DELAYED}</option>
                        <option value={COURIER_STATUS.PROCESSING} className='test option'>{COURIER_STATUS.PROCESSING}</option>
                        <option value={COURIER_STATUS.LOST} className='test option'>{COURIER_STATUS.LOST}</option>
                    </select>
                </div>
                <Link to='/dashboard/add-courier' className='test add-mycouriers-btn-link'>
                    <button className='test add-mycouriers-btn'>
                        Add Courier
                    </button>
                </Link>
            </div>

            <div className="test search-results">
                <h6 className="test search-results-text">Search Results : <span className='test result-count'>{filteredCouriers.length}</span></h6>
            </div>

            <div className="test mycouriers-table">
                <div className="test table-header">
                    <div className="test header">
                        <h5 className="test header-text">Track ID</h5>
                    </div>
                    <div className="test header">
                        <h5 className="test header-text">Recepient</h5>
                    </div>
                    <div className="test header">
                        <h5 className="test header-text">Order Date</h5>
                    </div>
                    <div className="test header">
                        <h5 className="test header-text">Status</h5>
                    </div>
                </div>
                <div className="test table-body">
                    {
                        filteredCouriers.length === 0 ? <NoData message='No couriers data available' /> :
                            filteredCouriers.map((courier, index) => {
                                return (
                                    <Courier
                                        key={index}
                                        courier_id={courier.courier_id}
                                        tracking_number={courier.tracking_number}
                                        sender_name={courier.sender_name}
                                        recipient_name={courier.recipient_name}
                                        status={courier.status}
                                        created_at={courier.created_at}
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
