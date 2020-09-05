import React from 'react';
import Head from 'next/head';

import './Layout.css';
import SideNavigationView from 'components/SideNavigation';

type Props = {
    title: string
}

const Layout: React.FC<Props> = props => 
    <div className={'layout-root'}>
        <Head>
            <title>{props.title}</title>
            <link rel="shortcut icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&family=Source+Code+Pro:wght@400;600&display=swap" rel="stylesheet" />
        </Head>
        <header className='layout-root__header'>
            <div className='sf-container layout-root__brand'>
                <h1 className='layout-root__brand-text'>
                    jonny kreell
                </h1>
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
            <SideNavigationView>
                {props.children}
            </SideNavigationView>
        </main>
        <footer className='layout-root__footer'>
            <div className='sf-container layout-root__footer-text'>
                2020 - {new Date().getFullYear()} 
                <i className='fas fa-2x fa-crow layout-root__footer-icon'></i> 
                Jonny Kreell
            </div>
        </footer>
    </div>

export default Layout;