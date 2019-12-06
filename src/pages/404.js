import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>404</h1>
        <h5>أربعة مائة و أربعة</h5>
        <h3>τετρακόσια τέσσερα</h3>
        <h3>四百零四</h3>
        <h5>čtyři sta čtyři</h5>
        <h5>bốn trăm lẻ bốn</h5>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
