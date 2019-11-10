import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div class="container h-100">
    <h1 align="center">How'd you get here?</h1>
    <p align="center">You found a broken link. Please let the groom know :)</p>
    </div>
  </Layout>
)

export default NotFoundPage
