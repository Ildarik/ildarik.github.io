import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello!</h1>
    <p>I am a web developer.</p>
    <Img fluid={data.file.childImageSharp.fluid}></Img>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "avatar.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 460) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
