import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Header from "../components/Header"
import Topper from "../components/Topper"

const PostHolder = styled.main`
  max-width: 90vmin;
  margin: 10vh 0;
`

const Image = styled.img`
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
      <Topper color="blue" />
      <Header headerText="Blog" />

      <Image src={post.image.file.url} alt={post.image.description} />
      <PostHolder>
        <BlogPostHeadline>{post.title}</BlogPostHeadline>
        <BlogPostDateline>{post.date}</BlogPostDateline>
        <BlogPostCopy
          dangerouslySetInnerHTML={{
            __html: post.content.childMarkdownRemark.html
          }}
        />
      </PostHolder>
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
        file {
          url
        }
      }
    }
  }
`
