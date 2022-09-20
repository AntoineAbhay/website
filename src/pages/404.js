import React from "react"
import HtmlHead from "../components/HtmlHead"
import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout pageId="not-found">
    <h1>NOT FOUND</h1>
    <p>Sorry, this page does not exist yet...</p>
  </Layout>
)

export const Head = () => <HtmlHead title="404: Not found" />

export default NotFoundPage
