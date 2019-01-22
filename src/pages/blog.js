import React from "react"
import { graphql } from "gatsby"
import Link from "gatsby-link"
import styled from "styled-components"

import Layout from "../components/Layout"
import Header from "../components/Header"
import Topper from "../components/Topper"
import ContentHolder from "../components/ContentHolder"

const BlogPageWrapper = styled.div`
  background-color: #f2ba05;
  background-image: linear-gradient(
    135deg,
    #f2ba05 15%,
    #f2309b 56%,
    #37378c 92%
  );
  min-height: 100vh;
  padding-bottom: 20vh;
  width: 100vw;
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
    box-shadow: 10px 10px 16px -8px rgba(60, 60, 60, 1);
  }
`

const BlogImage = styled.img`
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
        <BlogImage src={node.image.file.url} alt={node.image.description} />
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
      <Topper color="black" />
      <ContentHolder>
        <Header headerText="Blog" />
        <BlogPostList>
          {data.allContentfulBlog.edges.map(edge => (
            <BlogPost node={edge.node} />
          ))}
        </BlogPostList>
      </ContentHolder>
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
            file {
              url
            }
          }
        }
      }
    }
  }
`
