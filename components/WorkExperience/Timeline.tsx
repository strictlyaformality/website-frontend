import React from 'react';

type Props = {
    startDate: string,
    endDate?: string
}

const Timeline: React.FC<Props> = ({ startDate, endDate }) => {
    const startYear = new Date(startDate).getFullYear();
    const endYear = (endDate ? new Date(endDate) : new Date()).getFullYear();

    return <div className='work-experience__job-timeline'>
        {
            new Array(endYear - startYear)
                .fill(null)
                .map((_, i) => <div key={i} className='work-experience__job-timeline-year'></div>)
        }
    </div>
}

export default Timeline;