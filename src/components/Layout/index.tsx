/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useLayoutEffect, useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import "minireset.css"
import "@fortawesome/fontawesome-free/css/all.css"
import "./layout.scss"

const iconClasses = [
  "",
  "fa-heart",
  "fa-brain"
]

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="sf-layout">
      <header className="sf-layout-header">
        <div className="sf-container sf-flex-row sf-flex-row--align-center">
          <Link className="sf-layout-header-brand" to="/">
            {data.site.siteMetadata.title}
          </Link>
          <a className="sf-layout-header-github" target="_blank" href="https://github.com/strictlyaformality">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </header>
      <main>{children}</main>
      <footer className="sf-layout-footer">
        Jonny Kreell
        <span className="fa-stack sf-copyright-icon">
          <i className={`fas fa-bread-slice fa-stack-2x`}></i>
          <i className="far fa-copyright fa-stack-1x white-font"></i>
        </span>
        2020 - {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout