import React from "react"
import { graphql } from "gatsby"
import Link from "gatsby-link"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import Topper from "../components/Topper"
import Nav from "../components/Nav"
import ContentHolder from "../components/ContentHolder"
import Footer from "../components/Footer"

const BlogPageWrapper = styled.div`
  background: #fefefe;
  height: 100%;
  width: 100vw;
`

const BlogPageHeader = styled.h1`
  color: #161616;
  display: flex;
  justify-content: center;
  margin-bottom: 5vh;
`

const BlogHeader = styled.h3`
  color: #161616;
  margin: 0;
`

const BlogPostList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 450px;
  grid-gap: 20px;
  margin: 0;
  padding: 0;
`

const BlogPostHolder = styled.li`
  background: #fefefe;
  border: 1px solid #3c3c3c;
  border-radius: 5px;
  overflow: hidden;
  transition: 1s all;
  :hover {
    box-shadow: 1px 3px 5px hsla(0, 0%, 0%, 0.7),
      1px 5px 15px hsla(0, 0%, 0%, 0.3);
  }
  a {
    text-decoration: none;
  }
`

const BlogImage = styled(Img)`
  position: relative;
  top: 0;
  left: 0;
  height: 200px;
  object-fit: cover;
  width: 100%;
`

const BlogCopyHolder = styled.div`
  display: flex;
  flex-direction: column;
  height: 43%;
  justify-content: space-between;
  padding: 20px 20px 0 20px;
`

const BlogExcerpt = styled.div`
  color: #3c3c3c;
  font-size: 15px;
`

const ReadMore = styled.h6`
  color: #3c3c3c;
  font-weight: 900;
  margin: 0;
`

const BlogPost = ({ node }) => {
  return (
    <BlogPostHolder>
      <Link to={node.slug}>
        <BlogImage fluid={node.image.fluid} alt={node.image.description} />
        <BlogCopyHolder>
          <BlogHeader>{node.title}</BlogHeader>
          <BlogExcerpt
            dangerouslySetInnerHTML={{
              __html: node.content.childMarkdownRemark.excerpt
            }}
          />
          <ReadMore>Click to read more</ReadMore>
        </BlogCopyHolder>
      </Link>
    </BlogPostHolder>
  )
}

export default ({ data, location }) => (
  <Layout location={location}>
    <BlogPageWrapper>
      <Topper color="hsla(0,0%,8.6%,0.7)" />
      <Nav navcolor="hsl(30, 100%, 50%)" />
      <ContentHolder>
        <BlogPageHeader>Big Tent's Big Blog</BlogPageHeader>
        <BlogPostList>
          {data.allContentfulBlog.edges.map(edge => (
            <BlogPost node={edge.node} />
          ))}
        </BlogPostList>
      </ContentHolder>
      <Footer color="hsla(0,0%,8.6%,0.7)" />
    </BlogPageWrapper>
  </Layout>
)

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlog {
      edges {
        node {
          title
          slug
          content {
            childMarkdownRemark {
              excerpt
            }
          }
          image {
            description
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
