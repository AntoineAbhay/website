import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout pageId="not-found">
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Sorry, this page does not exist yet...</p>
  </Layout>
)

export default NotFoundPage
