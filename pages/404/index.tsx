import React from 'react';
import Layout from 'components/Layout';

import './Custom404.css';

const Custom404: React.FC = props =>
    <Layout title='404!!' contentClassName='custom-404-layout'>
        <div className='custom-404'>
            <span className='custom-404__error'>404!</span>
        </div>
    </Layout>

export default Custom404;
