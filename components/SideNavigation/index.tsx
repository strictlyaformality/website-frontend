import React from 'react';
import SideNavigation from './SideNavigation';

import './SideNavigationView.css';

const SideNavigationView: React.FC = props => 
    <div className='side-nav-view'>
        <SideNavigation />
        <div className='side-nav-view__content'>
            {props.children}
        </div>
    </div>

export default SideNavigationView;