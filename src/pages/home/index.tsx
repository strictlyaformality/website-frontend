import React from "react"

import Layout from "@components/Layout"
import SEO from "@components/SEO"

import "./home.scss"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <div className="sf-home-content">
      ¯\_(ツ)_/¯
    </div>
  </Layout>
)

export default IndexPage
