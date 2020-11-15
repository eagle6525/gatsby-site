/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Spring } from 'react-spring/renderprops'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import './layout.css'
import Archive from './archive'

const MainLayout = styled.main`
  width: 90%;
  max-width: 1250px;
  margin: 1rem auto;
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 40px;
  }
`

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { regex: "/bg/" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Spring
        from={{ height: location.pathname === '/' ? 100 : 200 }}
        to={{ height: location.pathname === '/' ? 200 : 100 }}
      >
        {styles => (
          <div style={{ overflow: 'hidden', ...styles }}>
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
        )}
      </Spring>
      <MainLayout>
        <div>{children}</div>
        <Archive />
      </MainLayout>
      <footer
        style={{
          marginTop: '2rem',
          fontSize: '0.8rem',
        }}
      >
        © {new Date().getFullYear()}, Built by Wayne Pichotta using
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {},
}

export default Layout
