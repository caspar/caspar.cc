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
        socialimage="https://caspar.cc/headshot.jpg"
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          {/* <h4 id="bio"> */}
          I'm a recent graduate and current adjunct instructor of physics at NYU with a combined 3+
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
          and one of 2019's{" "}
          <a href="https://www.nyu.edu/students/getting-involved/leadership-and-service/leadership-studies-development/immersive-leadership-program/undergraduate-programs/nyu-leadership-fellows/currentfellows1.html">
            {" "}
            NYU Leadership Fellows
          </a>
          . My other accomplishments include: two co-authorships on scientific{" "}
          <a target="_" href="https://caspar.cc/paper-1.pdf">
            {" "}
            publications
          </a>
          , four commissioned new-media art{" "}
          <a href="/installations"> installations</a>
          , and one patent pending filing. Most recently, I'm working with a group at the Courant Institute of Mathematical Sciences on an AI- and healthcare-related project.
           I have been awarded a <a target="_" href= "https://engineering.nyu.edu/news/bound-beijing">Fulbright fellowship</a> to conduct independent research in China and Taiwan.
          <br />
          <br />I love working with my hands and tackling new projects. Don't
          hesitate to shoot me an <a href="mailto:c@caspar.cc">
            {" "}
            email{" "}
          </a> or{" "}
          <a target="_" href="http://calendly.com/casparlant/30min">
            {" "}
            schedule a time to meet
          </a>{" "}
          if you'd like to know more.
          <br />
          <br />
          <br />
          <figure className="kg-card kg-image-card">
            <br />
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
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
