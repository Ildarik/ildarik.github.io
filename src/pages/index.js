import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import styled from "styled-components"

const ImgContainer = styled.div`
  @media (min-width: 576px) {
    width: 400px;
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello!</h1>
    <p>I am a web developer.</p>
    <ImgContainer>
      <Img fluid={data.file.childImageSharp.fluid}></Img>
    </ImgContainer>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "avatar.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 460, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
