import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="About"
        keywords={[
          `Caspar`,
          `Caspar Lant`,
          `Bio`,
          `Headshot`,
          `NYU`,
          `New York University`,
        ]}
        description="Caspar Lant: Artist, Scientist, Engineer"
        socialimage="http://caspar.cc/headshot.jpg"
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          {/* <h4 id="bio"> */}
          I'm a physics major at NYU in my final semester with a combined 3+
          years research experience from fellowship awards at national labs in
          the{" "}
          <a target="_" href="https://science.osti.gov/wdts/suli/">
            US
          </a>{" "}
          and{" "}
          <a target="_" href="https://www.daad.de/rise/en/">
            Germany
          </a>
          . I'm also the group leader and project founder of IoT sensors
          development group at Tandon School of Engineering and NYU Shanghai
          and, most recently, one of this year's{" "}
          <a href="https://www.nyu.edu/students/getting-involved/leadership-and-service/leadership-studies-development/immersive-leadership-program/undergraduate-programs/nyu-leadership-fellows/currentfellows1.html">
            {" "}
            NYU Leadership Fellows
          </a>
          . My other accomplishments include: two co-authorships on scientific{" "}
          <a target="_" href="http://caspar.cc/paper-1.pdf">
            {" "}
            publications
          </a>
          , four commissioned new-media art{" "}
          <a href="/installations"> installations</a>
          , and one patent pending filing.
          <br />
          <br />I love working with my hands and tackling new projects. Don't
          hesitate to shoot me an <a href="mailto:caspar@nyu.edu">
            email
          </a> or{" "}
          <a target="_" href="http://calendly.com/casparlant/30min">
            schedule a time to meet
          </a>{" "}
          if you'd like to know more.
          <br />
          <br />.
          <figure className="kg-card kg-card-full">
            <br />
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          {/* <h3 id="dynamic-styles">Dynamic styles</h3>
          <p>
            London comes with photo-centric main layout best suited to
            photography, graphics portfolios and other image-heavy uses.
          </p>
          <p>
            Both post and page templates are light and minimal, with all the
            focus on the content while the design of the theme gets out of the
            way. Beneath the hood, London enjoys the full power of the{" "}
            <a href="https://docs.ghost.org/api/handlebars-themes/">
              Ghost Handlebars Theme API
            </a>{" "}
            to provide limitless customisation options and dynamic styles.
          </p>
          <p>
            Don't forget to check out the{" "}
            <a href="https://docs.ghost.org/integrations/">
              Ghost Integrations Directory
            </a>{" "}
            for more ways to integrate Ghost with your favourite services.
          </p> */}
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(relativePath: { eq: "ornl-caspar-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
