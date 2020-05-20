import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <h1>Hi ! This is my website !</h1>
  </Layout>
)

export default IndexPage
