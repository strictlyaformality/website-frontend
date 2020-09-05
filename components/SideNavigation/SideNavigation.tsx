import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { combineClassNames } from 'styles/utilities';

const SideNavigation: React.FC = props => 
    <aside className='side-nav-view__nav'>
        <SideNavigationItem href='/skills'>
            Skills
        </SideNavigationItem>
        <SideNavigationItem href='/experience'>
            Experience
        </SideNavigationItem>
        <SideNavigationItem href='/education'>
            Education
        </SideNavigationItem>
    </aside>

export default SideNavigation;

const SideNavigationItem: React.FC<{ href: string }> = props => {
    const router = useRouter();

    const className = combineClassNames(
        'side-nav-view__nav-item',
        router.pathname === props.href && 'side-nav-view__nav-item--active'
    );

    return <h1 className={className}>
        <Link href={props.href}>
            <a>{props.children}</a>
        </Link>
    </h1>
}