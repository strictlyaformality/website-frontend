/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import "minireset.css"
import "@fortawesome/fontawesome-free/css/all.css"
import "./layout.scss"

const iconClasses = [
  "fa-bread-slice",
  "fa-heart",
  "fa-brain"
]

const Layout: React.FC = ({ children }) => {
  const [iconIndex, setIconIndex] = useState<number>(0);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    const nextIndex = Math.floor(Math.random() * iconClasses.length);
    setIconIndex(nextIndex)
  })

  return (
    <div className="sf-layout">
      <header className="sf-layout-header">
        <h1 className="sf-layout-header-brand">
          <Link to="/">
            {data.site.siteMetadata.title}
          </Link>
        </h1>
        <h1 className="sf-layout-header-github">
          <a target="_blank" href="https://github.com/strictlyaformality">
            <i className="fab fa-github-alt"></i>
          </a>
        </h1>
      </header>
      <main>{children}</main>
      <footer className="sf-layout-footer">
        Jonny Kreell
        <span className="fa-stack sf-copyright-icon">
          <i className={`fas ${iconClasses[iconIndex]??""} fa-stack-2x`}></i>
          <i className="far fa-copyright fa-stack-1x secondary-font-color"></i>
        </span>
        2020 - {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout