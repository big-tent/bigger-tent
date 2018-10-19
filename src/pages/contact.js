import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

import Layout from "../components/Layout"
import Topper from "../components/Topper"

const ContactWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100vw;
  justify-content: center;
  align-items: center;
`

const Form = styled.form`
  align-items: center;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  margin-bottom: 5vh;
  padding: 30px;
  width: 80vmin;
`

const Input = styled.input`
  font-family: "Lato", sans-serif;
  font-size: 1.5rem;
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
`
const Message = styled.textarea`
  font-family: "Lato", sans-serif;
  font-size: 1.5rem;
  height: 200px;
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
  background: #86ab45;
  border-color: #86ab45;
  border-radius: 5px;
  border-style: outset;
  color: #fff;
  font: 1.5rem Lato, sans-serif;
  height: 50px;
  text-shadow: none;
  width: 30vmin;
  :hover {
    cursor: pointer;
  }
`

const HomeButton = styled.button`
  background: #4189c8;
  border-radius: 5px;
  color: #fff;
  display: flex;
  justify-content: center;
  height: 50px;
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
    margin-bottom: 0.5rem;
  }
`

export default () => (
  <Layout>
    <Topper color="black" />
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
  </Layout>
)
