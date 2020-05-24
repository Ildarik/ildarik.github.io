import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import styled from "styled-components"

const ImgContainer = styled.div`
  width: 200px;
  margin: 0 auto;
  margin-bottom: 14px;

  @media (min-width: 576px) {
    width: 300px;
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <ImgContainer>
      <Img
        style={{ borderRadius: "50%" }}
        fluid={data.file.childImageSharp.fluid}
      ></Img>
    </ImgContainer>

    <h1 style= {{textAlign: "center"}}>Ildar Nogmanov</h1>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "avatar.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
