import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import Topper from "../components/Topper"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

const PostHolder = styled.main`
  width: 60vw;
  margin: 0 auto 5rem;
  padding-top: 10vh;
`

const Image = styled(Img)`
  max-height: 50vh;
  width: 100%;
  object-fit: cover;
`

const BlogPostHeadline = styled.h1`
  color: #161616;
  margin-top: 20px;
`

const BlogPostDateline = styled.h4`
  color: #161616;
  margin-bottom: 5px;
`

const BlogPostCopy = styled.div`
  color: #161616;
  font-size: 20px;
  line-height: 1.5;
  ul {
    padding-left: 20px;
  }
  li {
    font-weight: bold;
    list-style-type: disc;
    margin-bottom: 10px;
  }
`

export default ({ data }) => {
  const post = data.contentfulBlog
  return (
    <Layout>
      <Topper color="hsla(0,0%,8.6%,0.7)" />
      <Nav navcolor="hsl(31.6, 92.5%, 52.5%)" />
      <Image fluid={post.image.fluid} alt={post.image.description} />
      <PostHolder>
        <BlogPostHeadline>{post.title}</BlogPostHeadline>
        <BlogPostDateline>{post.date}</BlogPostDateline>
        <BlogPostCopy
          dangerouslySetInnerHTML={{
            __html: post.content.childMarkdownRemark.html
          }}
        />
      </PostHolder>
      <Footer color="hsla(0,0%,8.6%,0.7)" />
    </Layout>
  )
}

export const query = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      slug
      date(formatString: "DD MMMM, YYYY")
      content {
        childMarkdownRemark {
          html
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
`
