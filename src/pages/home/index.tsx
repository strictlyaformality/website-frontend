import React, { useLayoutEffect, useState } from "react"
import { Link } from "gatsby";

import Layout from "@components/Layout"
import SEO from "@components/SEO"

import "./home.scss"

const generateRandomIndex = (a: Array<any>) => {
  return Math.floor(Math.random() * a.length);
}

const resumeIcons = [
  "fa-book-dead",
  "fa-book",
  "fa-file-prescription",
  "fa-file-pdf",
  "fa-file-signature"
]

const projectIcons = [
  "fa-bug",
  "fa-code-branch",
  "fa-coffee",
  "fa-heart-broken",
  "fa-pencil-ruler",
  "fa-tools",
  "fa-crow"
]

const HomePage: React.FC = () => {
  const [resumeIndex, setResumeIndex] = useState<number>(0);
  const [projectsIndex, setProjectsIndex] = useState<number>(0);

  useLayoutEffect(() => {
    setResumeIndex(generateRandomIndex(resumeIcons));
    setProjectsIndex(generateRandomIndex(projectIcons));
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <div className="sf-home-content">
        ¯\_(ツ)_/¯
      </div>
    </Layout>
  );
}

export default HomePage
