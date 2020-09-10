import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { combineClassNames } from 'styles/utilities';

const SideNavigation: React.FC = props => 
    <aside className='side-nav-view__nav'>
        <SideNavigationItem href='/skills'>
            <span className='side-nav-view__nav-item-text'>Skills</span>
            <span className='side-nav-view__nav-item-icon'>
                <i  title='Skills' 
                    className='side-nav-view__nav-item-icon fas fa-code'>    
                </i>
            </span>
        </SideNavigationItem>
        <SideNavigationItem href='/work-experience'>
            <span className='side-nav-view__nav-item-text'>Experience</span>
            <span className='side-nav-view__nav-item-icon'>
                <i  title='Professional Experience'
                    className='side-nav-view__nav-item-icon fas fa-coffee'>
                </i>
            </span>
        </SideNavigationItem>
        <SideNavigationItem href='/education'>
            <span className='side-nav-view__nav-item-text'>Education</span>
            <span className='side-nav-view__nav-item-icon'>
                <i  title='Education'
                    className='side-nav-view__nav-item-icon fas fa-graduation-cap'>    
                </i>
            </span>
        </SideNavigationItem>
        <SideNavigationItem className='side-nav-view__nav-item--external' href='https://www.linkedin.com/in/jonny-kreell/' target='_blank'>
            <span className='side-nav-view__nav-item-icon'>
                <i className='side-nav-view__nav-item-icon fab fa-linkedin'></i>
            </span>
        </SideNavigationItem>
        <SideNavigationItem className='side-nav-view__nav-item--external' href='https://github.com/strictlyaformality' target='_blank'>
            <span className='side-nav-view__nav-item-icon'>
                <i className='fab fa-github'></i>
            </span>
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