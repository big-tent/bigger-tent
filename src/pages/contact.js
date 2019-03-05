import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Link from "gatsby-link"

import Layout from "../components/Layout"
import Topper from "../components/Topper"
import Nav from "../components/Nav"
import ContentHolder from "../components/ContentHolder"
import Header from "../components/Header"
// import BlurbMain from "../components/BlurbMain"
import Footer from "../components/Footer"

const BlurbMain = styled.div`
  margin-bottom: 3rem;
`

const ContactWrapper = styled.div`
  background: #fefefe;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
`
const TopSpacer = styled.div`
  margin-top: 15vh;
`

const Form = styled.form`
  background: #fefefe;
  border-radius: 5px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  height: 80vh;
  margin-bottom: 5vh;
  margin-top: 5vh;
  padding: 30px;
  min-width: 100%;
`

const Input = styled.input`
  font-family: "Lato", sans-serif;
  font-size: 1.25rem;
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
`
const Message = styled.textarea`
  font-family: "Lato", sans-serif;
  font-size: 1.25rem;
  min-height: 250px;
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
`

const ButtonHolder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Submit = styled.input`
  background: green;
  border-color: green;
  border-radius: 5px;
  border-style: outset;
  color: #fefefe;
  font: 1.5rem Lato, sans-serif;
  text-shadow: none;
  width: 30vmin;
  :hover {
    cursor: pointer;
  }
`

const HomeButton = styled.button`
  background: red;
  border-radius: 5px;
  color: #fefefe;
  display: flex;
  justify-content: center;
  font: 1.5rem Lato, sans-serif;
  padding: 10px;
  width: 30vmin;
  :hover {
    cursor: pointer;
  }
`
const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  h6 {
    color: #161616;
    margin-bottom: 0.5rem;
  }
`

export default ({ location, data }) => (
  <Layout location={location}>
    <Topper color="hsla(0,0%,8.6%,0.7)" />
    <Nav navcolor="hsl(30, 100%, 50%)" />
    <ContentHolder>
      <TopSpacer />
      <Header
        headerText={data.headerText.childMarkdownRemark.frontmatter.title}
      />
      <BlurbMain>
        <div
          dangerouslySetInnerHTML={{
            __html: data.headerText.childMarkdownRemark.html
          }}
        />
      </BlurbMain>
      <ContactWrapper>
        <Form name="contact" method="POST" netlify>
          <Label>
            <h6>Name</h6>
            <Input type="text" name="name" placeholder="Your name" />
          </Label>
          <Label>
            <h6>Email</h6>
            <Input type="email" name="email" placeholder="Your email address" />
          </Label>
          <Label>
            <h6>Message</h6>
            <Message type="message" name="message" placeholder="Your message" />
          </Label>
          <ButtonHolder>
            <Submit type="submit" value="Send" />
            <Link to="/">
              <HomeButton>Back</HomeButton>
            </Link>
          </ButtonHolder>
        </Form>
      </ContactWrapper>
    </ContentHolder>
    <Footer color="hsla(0,0%,8.6%,0.7)" />
  </Layout>
)

export const query = graphql`
  query ContactQuery {
    headerText: file(relativePath: { eq: "markdown/contactheader.md" }) {
      childMarkdownRemark {
        frontmatter {
          title
        }
        html
      }
    }
  }
`
