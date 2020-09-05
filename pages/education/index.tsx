import React from 'react';
import Layout from 'components/Layout';

const EducationPage: React.FC = props => 
    <Layout title="Education">
        {props.children}
    </Layout>

export default EducationPage;