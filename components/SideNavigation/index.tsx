import React from 'react';
import SideNavigation from './SideNavigation';

import './SideNavigationView.css';
import { combineClassNames } from 'styles/utilities';

export type Props = {
    contentClassName?: string
}

const SideNavigationView: React.FC<Props> = props => 
    <div className='side-nav-view'>
        <SideNavigation />
        <div className={combineClassNames('side-nav-view__content', props.contentClassName)}>
            {props.children}
        </div>
    </div>

export default SideNavigationView;