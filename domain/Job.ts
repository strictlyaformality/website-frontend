export type Job = {
    id: number,
    title: string,
    company: string,
    startDate: string,
    endDate?: string,
    jobExperiences: Job.Experience[]
}

export namespace Job {

    export function getEndYear(endDate?: string): string | null {
        if (endDate) {
            const date = new Date(endDate);
            return ""+date.getFullYear();
        }

        return null;
    }

    export type Experience = {
        id: number,
        description: string,
        jobId: number
    }
}