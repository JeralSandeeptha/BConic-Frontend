import { useContext, useEffect, useState } from 'react';
import './SideNavigation.scss';
import AuthSubHeader from '../auth-subheader/AuthSubHeader';
import NavigationLink from '../nav-link/NavigationLink';
import Section from '../section/Section';
import { TokenContext } from '../../context/TokenContext';
import { IdContext } from '../../context/UserIdContext';
import { RoleContext } from '../../context/RoleContext';
import { User } from '../../types/model';
import getSingleUser from '../../api/user-service/getUser';

const SideNavigation = () => {

    const [user, setUser] = useState<User | undefined>(undefined); 

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

    const tokenContext = useContext(TokenContext);
    const updateToken = tokenContext?.updateToken;
    const token = tokenContext?.token;
    if (!updateToken) {
        throw new Error('Token context is not available');
    }
    const idContext = useContext(IdContext);
    const id = idContext?.id;
    if (!id) {
        throw new Error('Id context is not available');
    }
    const roleContext = useContext(RoleContext);
    const updateRole = roleContext?.updateRole;
    const role = roleContext?.role;
    if (!updateRole && !role) {
        throw new Error('Role context is not available');
    }

    useEffect(() => {
        getSingleUser({
            id: id,
            setUser: setUser,
            token: token || ''
        });
    }, [id, token]);

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
                    {
                        role === 'admin' && (
                            <NavigationLink
                                id={4}
                                name="Handle Couriers"
                                route="/dashboard/manage-couriers"
                                iconName="https://res.cloudinary.com/dgit2ltnm/image/upload/v1728887805/person-circle-plus_wxpqzc.png"
                            />
                        )
                    }
                </div>
            </div>
            <div className="test nav-footer">
                <div className="test nav-footer-left">
                    <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1723890106/user-profile-img-removebg-preview_rlafow.png" alt='profile-img' className="test profile-img" />
                </div>
                <div className="test nav-footer-right">
                    <h6 className="test name">{user?.first_name && user?.last_name ? `${user?.first_name} ${user?.last_name}` : 'Guest'}</h6>
                    <h6 className="test email">{user?.email}</h6>
                </div>
            </div>
        </div>
    );
}

export default SideNavigation;