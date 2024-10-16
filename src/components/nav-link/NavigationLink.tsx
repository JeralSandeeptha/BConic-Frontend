import React from 'react';
import './NavigationLink.scss';
import { NavLink } from 'react-router-dom';
import { NavLinkProps } from '../../types/component';

const NavigationLink = (props: NavLinkProps) => {

    return (
        <div className="test sidebar-link" key={props.id}>
            <NavLink 
                to={props.route} 
                className={({ isActive }) => isActive ? 'test nav-link active' : 'test nav-link'}
            >
                <img src={props.iconName} alt="nav-icon" className='test nav-icon'/>
                <h5 className="test link-name">{props.name}</h5>
            </NavLink>
        </div>
    );
}

export default NavigationLink;