import React from "react"
import { graphql } from "gatsby"
import Link from "gatsby-link"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Topper from "../components/topper"
import Nav from "../components/nav"
import ContentHolder from "../components/contentholder"
import CardGrid from "../components/cardgrid"
import GridCard from "../components/gridcard"
import Footer from "../components/footer"

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
    <GridCard>
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
    </GridCard>
  )
}

const CarouselImage = ({ node }) => {
  return (
    <li>
      <Img fluid={node.image.fluid} />
    </li>
  )
}

export default ({ data, location }) => (
  <Layout location={location}>
    <BlogPageWrapper>
      <Topper color="hsla(0,0%,8.6%,0.7)" />
      <Nav navcolor="hsl(30, 100%, 50%)" />
      <ContentHolder>
        <BlogPageHeader>Big Tent's Big Blog</BlogPageHeader>
        <CardGrid>
          {data.allContentfulBlog.edges.map(edge => (
            <BlogPost node={edge.node} />
          ))}
        </CardGrid>

        <ul>
          {data.allContentfulBlog.edges.map(edge => (
            <CarouselImage node={edge.node} />
          ))}
        </ul>
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
