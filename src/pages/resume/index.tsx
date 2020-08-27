import React from "react";

import Layout from "@components/Layout";
import SEO from "@components/SEO";
import { graphql, PageProps } from "gatsby";
import AnchorNavView, { Anchored } from "@components/AnchorNav";

//#region Helper Types
type ResumePage = {
    allStrapiEducation: {
        nodes: Array<ResumePage.Education>
    },
    allStrapiJob: {
        nodes: Array<ResumePage.Job>
    },
    allStrapiSkillCategory: {
        nodes: Array<ResumePage.SkillCategory>
    }
}

declare namespace ResumePage {
    export type Education = {
        id: string,
        institutionName: string,
        degreeName: string,
        startDate: string,
        endDate: string,
        achievedGpa: number,
        maximumGpa: number,
        additionalInformation: string
    }

    export type Job = {
        id: string,
        title: string,
        company: string,
        startDate: string,
        endDate?: string,
        jobExperiences: Array<JobExperience>
    }

    export type JobExperience = {
        id: string,
        description: string
    }

    export type SkillCategory = {
        id: string,
        name: string,
        skills: Array<Skill>
    }

    export type Skill = {
        id: string,
        name: string
    }
}
//#endregion

const ResumePage: React.FC<PageProps<ResumePage>> = ({ data }) => {
    const { 
        allStrapiEducation: { nodes: education },
        allStrapiJob: { nodes: jobs },
        allStrapiSkillCategory: { nodes: skillCategories }
    } = data;

    console.log(education, jobs, skillCategories);

    return <Layout>
        <SEO title="Resume" />
        <AnchorNavView>
            <Anchored id="skills" anchorLabel="Skills">
                <h2>Skills</h2>
                {
                    skillCategories.map(c => 
                        <Anchored id={c.id} anchorLabel={c.name}>
                            <h3>{c.name}</h3>
                            {
                                c.skills.map(s => 
                                    <p key={s.id}>{s.name}</p>    
                                )
                            }
                        </Anchored>
                    )
                }
            </Anchored>
            <Anchored id="jobs" anchorLabel="Professional Experience">
                <h2>Professional Experience</h2>
                {
                    jobs.map(j => 
                        <Anchored id={j.id} anchorLabel={`${j.title} @ ${j.company}`}>
                            {j.title}
                        </Anchored>    
                    )
                }
            </Anchored>
            <Anchored id="education" anchorLabel="Education">
                <h2>Education</h2>
                and some dumb shit here
            </Anchored>
        </AnchorNavView>
    </Layout>
}

export const educationQuery = graphql`
    fragment EducationFragment on StrapiEducationConnection {
        nodes {
            id
            institutionName
            degreeName
            startDate
            endDate
            achievedGpa
            maximumGpa
            additionalInformation
        }
    }
`

export const jobQuery = graphql`
    fragment JobFragment on StrapiJobConnection {
        nodes {
            id
            title
            company
            startDate
            endDate
            jobExperiences {
                id
                description
            }
        }
    }
`

export const skillCategoryQuery = graphql`
    fragment SkillCategoryFragment on StrapiSkillCategoryConnection {
        nodes {
            id
            name
            skills {
                id
                name
            }
        }
    }
`

export const pageQuery = graphql`
    query ResumeQuery {
        allStrapiEducation {
            ...EducationFragment
        }

        allStrapiJob {
            ...JobFragment
        }

        allStrapiSkillCategory {
            ...SkillCategoryFragment
        }
    }
`

export default ResumePage;