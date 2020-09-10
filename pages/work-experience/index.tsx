import React from 'react';
import Layout from 'components/Layout';
import { GetStaticProps } from 'next';
import { Job } from 'domain/Job';
import WorkExperience from 'components/WorkExperience';
import { urlTemplate } from 'utilities';

type Props = {
    jobs: Job[]
}

const WorkExperiencePage: React.FC<Props> = props =>
    <Layout title="Experience">
        <WorkExperience {...props} />
    </Layout>

export default WorkExperiencePage;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const res = await fetch(urlTemplate('jobs'));

    return {
        props: {
            jobs: await res.json()
        }
    }
}