import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

const SingleBlogPage = props => {
  const { markdownRemark } = props.data
  return (
    <Layout location={props.path}>
      <SEO title={markdownRemark.frontmatter.title} />
      <h1>{markdownRemark.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: markdownRemark.html,
        }}
      ></div>
      <div
        style={{
          marginBottom: '1.5rem',
        }}
      >
        <Link to="/">Back to the homepage</Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($frontmatter__slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      html
      frontmatter {
        title
        slug
        date
      }
    }
  }
`

export default SingleBlogPage
