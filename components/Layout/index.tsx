import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import './Layout.css';
import SideNavigationView, { Props as SideNavigationViewProps } from 'components/SideNavigation';
import { useEventListener } from 'hooks/useEventListener';
import { combineClassNames } from 'styles/utilities';

type Props = SideNavigationViewProps & {
    title: string
}

const Layout: React.FC<Props> = props => {
    const [layoutModifier, setLayoutModifier] = useState<string>('');

    useEventListener({
        type: 'scroll',
        handler: () => {
            window.scrollY > 100
                ? setLayoutModifier('layout-root--fixed-header')
                : setLayoutModifier('');
        },
        // debounce: 300
    })

    return <div className={combineClassNames('layout-root', layoutModifier)}>
        <Head>
            <title>{props.title}</title>
            <link rel="shortcut icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&family=Source+Code+Pro:wght@400;600&display=swap" rel="stylesheet" />
        </Head>
        <header className={'layout-root__header'}>
            <div className='sf-container layout-root__brand'>
                <h1 className='layout-root__brand-text'>
                    jonny kreell
                </h1>
                <div className='layout-root__brand-text-abbrev'>
                    jk
                </div>
                <div className='layout-root__social-links'>
                    <a href='https://www.linkedin.com/in/jonny-kreell/' target='_blank' className='layout-root__social-link'>
                        <i className='fab fa-linkedin'></i>
                    </a>
                    <a href='https://github.com/strictlyaformality' target='_blank' className='layout-root__social-link'>
                        <i className='fab fa-github'></i>
                    </a>
                </div>
            </div>
        </header>
        <main className='layout-root__main'>
            <SideNavigationView contentClassName={props.contentClassName}>
                {props.children}
            </SideNavigationView>
        </main>
        <footer className='layout-root__footer'>
            <div className='sf-container layout-root__footer-text'>
                2020
                <i className='fas fa-2x fa-crow layout-root__footer-icon'></i> 
                {new Date().getFullYear()} 
            </div>
        </footer>
    </div>
}

export default Layout;