import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import styled from "styled-components"
import githubLogo from "../images/github.svg"
import telegramLogo from "../images/telegram.svg"
import twitterLogo from "../images/twitter.svg"
import linkedinLogo from "../images/linkedin.svg"
import SocialLink from "../components/socialLink"

const SocialLinks = [
  {
    url: "https://github.com/ildarik",
    logo: githubLogo,
    name: "github",
  },
  {
    url: "https://twitter.com/ildar_nogmanov",
    logo: twitterLogo,
    name: "twitter",
  },
  {
    url: "http://t.me/nogmanov",
    logo: telegramLogo,
    name: "telegram",
  },
  {
    url: "https://www.linkedin.com/in/ildar-nogmanov-69b96014a",
    logo: linkedinLogo,
    name: "linkedin",
  },
]

const SocialLinksWrapper = styled.div`
  margin-top: 36px;
  display: flex;
  justify-content: space-around;
`

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

    <h1 style={{ textAlign: "center" }}>Ildar Nogmanov</h1>

    <p style={{ padding: 5 }}>
      Hello! I&rsquo;m an&nbsp;engineer and lifelong learner currently lived
      near Moscow in Russia. I&rsquo;m working full-time at&nbsp;
      <a href="https://focus.bi" target="_blank" rel="noopener noreferrer">
        Focus Technologies
      </a>{" "}
      as&nbsp;a&nbsp;Cash desk solution expert. My&nbsp;main expertise
      is&nbsp;JavaScript development, frontend in&nbsp;React, and backend
      in&nbsp;node.js. In&nbsp;my&nbsp;free time, I&nbsp;play with kids,
      do&nbsp;sport and learn something new :)
    </p>

    <SocialLinksWrapper>
      {SocialLinks.map(socialLink => (
        <SocialLink
          url={socialLink.url}
          logo={socialLink.logo}
          socialName={socialLink.name}
        />
      ))}
    </SocialLinksWrapper>
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
