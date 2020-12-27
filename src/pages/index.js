import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import DevIllustration from "../images/dev.inline.svg"
import SpaceIllustration from "../images/space.inline.svg"
import CyclistIllustration from "../images/cyclist.inline.svg"

import SEO from "../components/seo"

import styles from "./index.module.css"

const IndexPage = () => {
  // location
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "shuttle_launch.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid
  return (
    <>
      <SEO title="Home" />
      <BackgroundImage
        fluid={imageData}
        className={styles.firstPanel}
        backgroundColor={`#040e18`}
      >
        <div className={styles.firstPanelContent}>
          <div className={styles.firstPanelHeader}>Hey,</div>
          <div className={styles.firstPanelHeader}>I'm Antoine</div>
        </div>
      </BackgroundImage>
      <div className={styles.secondPanel}>
        <div className={styles.secondPanelContent}>
          <div className={styles.secondPanelHeader}>Who I am</div>
          <div className={styles.separator} />
          <div className={styles.profile}>
            <div className={styles.profileItem}>
              <DevIllustration width='140px' height='113px' />
              <div className={styles.title}>Developer</div>
              <div className={styles.description}>
                Building products people love
              </div>
            </div>
            <div className={styles.profileItem}>
              <SpaceIllustration width='140px' height='113px' />
              <div className={styles.title}>Space enthousiast</div>
              <div className={styles.description}>
                Dreaming of the stars
              </div>
            </div>
            <div className={styles.profileItem}>
              <CyclistIllustration width='140px' height='113px' />
              <div className={styles.title}>Urban cyclist</div>
              <div className={styles.description}>
                Riding in Paris
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage
