import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(2, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
    color: #000;
    text-decoration: none;
  }
  h2 {
    margin-bottom: 0;
  }
  p {
    font-size: 0.8rem;
  }
  .read-more {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #242582;
  }
`

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

const Listing = () => {
  const { allMarkdownRemark } = useStaticQuery(LISTING_QUERY)

  return (
    <>
      {allMarkdownRemark.edges.map(({ node }) => (
        <Post key={node.frontmatter.slug}>
          <Link to={`/posts/${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <Link className="read-more" to={`/posts/${node.frontmatter.slug}`}>
            Read more
          </Link>
        </Post>
      ))}
    </>
  )
}

export default Listing
