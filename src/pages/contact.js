import React from "react"

import Layout from "../components/Layout"
import Header from "../components/Header"
import Topper from "../components/Topper"

export default () => (
  <Layout>
    <Topper color="black" />
    <Header headerText="Contact us" />
    <form name="contact" method="POST" netlify>
      <p>
        <label>
          Your Name: <input type="text" name="name" placeholder="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" placeholder="email" />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </Layout>
)
