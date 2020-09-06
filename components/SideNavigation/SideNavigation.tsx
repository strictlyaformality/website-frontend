import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { combineClassNames } from 'styles/utilities';

const SideNavigation: React.FC = props => 
    <aside className='side-nav-view__nav'>
        <SideNavigationItem href='/skills'>
            <span className='side-nav-view__nav-item-text'>Skills</span>
            <i  title='Skills' 
                className='side-nav-view__nav-item-icon fas fa-code'>    
            </i>
        </SideNavigationItem>
        <SideNavigationItem href='/experience'>
            <span className='side-nav-view__nav-item-text'>Experience</span>
            <i  title='Professional Experience'
                className='side-nav-view__nav-item-icon fas fa-coffee'>
            </i>
        </SideNavigationItem>
        <SideNavigationItem href='/education'>
            <span className='side-nav-view__nav-item-text'>Education</span>
            <i  title='Education'
                className='side-nav-view__nav-item-icon fas fa-graduation-cap'>    
            </i>
        </SideNavigationItem>
        <SideNavigationItem className='side-nav-view__nav-item--external' href='https://www.linkedin.com/in/jonny-kreell/' target='_blank'>
            <i className='side-nav-view__nav-item-icon fab fa-linkedin'></i>
        </SideNavigationItem>
        <SideNavigationItem className='side-nav-view__nav-item--external' href='https://github.com/strictlyaformality' target='_blank'>
            <i className='side-nav-view__nav-item-icon fab fa-github'></i>
        </SideNavigationItem>
    </aside>

export default SideNavigation;

const SideNavigationItem: React.FC<{ href: string, target?: string, title?: string, className?: string }> = props => {
    const router = useRouter();

    const className = combineClassNames(
        props.className,
        'side-nav-view__nav-item',
        router.pathname === props.href && 'side-nav-view__nav-item--active'
    );

    return <h1 className={className} title={props.title??''}>
        <Link href={props.href}>
            <a target={props.target??'_self'}>{props.children}</a>
        </Link>
    </h1>
}