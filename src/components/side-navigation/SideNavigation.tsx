import React from 'react';
import './SideNavigation.scss';
import AuthSubHeader from '../auth-subheader/AuthSubHeader';
import NavigationLink from '../nav-link/NavigationLink';
import Section from '../section/Section';

const SideNavigation = () => {

    const mainNavLinks = [
        {
            id: 1,
            name: 'Profile',
            route: '/dashboard/',
            iconName: 'https://res.cloudinary.com/dv9ax00l4/image/upload/v1722721063/clipboard-user_to770d.png'
        },
        {
            id: 2,
            name: 'My Couriers',
            route: '/dashboard/my-couriers',
            iconName: 'https://res.cloudinary.com/dgit2ltnm/image/upload/v1728814680/person-carry-box_1_wbodii.png'
        },
        {
            id: 3,
            name: 'Add Courier',
            route: '/dashboard/add-courier',
            iconName: 'https://res.cloudinary.com/dgit2ltnm/image/upload/v1728816762/user-add_kejodv.png'
        },
    ]

    return (
        <div className='test side-navigation'>
            <div className="test nav-header">
                <img src="https://res.cloudinary.com/dgit2ltnm/image/upload/v1728798879/logo_bi9mtm.png" alt="logo" className="logo test" />
            </div>
            <div className="test nav-content">
                <div className="test content-section">
                    <AuthSubHeader message='MAIN MENU' color='gray' />
                    <Section marginBottom='10px' />
                    {
                        mainNavLinks.map((link) => {
                            return (
                                <NavigationLink
                                    id={link.id}
                                    name={link.name}
                                    route={link.route}
                                    iconName={link.iconName}
                                />
                            )
                        })
                    }
                    <hr className='line' />
                </div>
            </div>
            <div className="test nav-footer">
                <div className="test nav-footer-left">
                    <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1723890106/user-profile-img-removebg-preview_rlafow.png" alt='profile-img' className="test profile-img" />
                </div>
                <div className="test nav-footer-right">
                    <h6 className="test name">Jeral Sandeeptha</h6>
                    <h6 className="test email">jeral.sandeeptha1@gmail.com</h6>
                </div>
            </div>
        </div>
    );
}

export default SideNavigation;