import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./resume.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const EXPERIENCES = [
  {
    title: "Fullstack - Hiresweet",
    location: "Région de Paris, France",
    companyLink: "https://hiresweet.com/",
    icon: "hiresweetImage",
    excerpt:
      "Développement de l'application client d'hiresweet et des outils internes utilisant React en front, NodeJs et MongoDB en back ainsi que des API REST et GraphQL.",
  },
  {
    title: "Fullstack - Ayuda",
    location: "Sydney, New South Wales, Australia",
    companyLink: "https://broadsign.com/ayuda/",
    icon: "ayudaImage",
    excerpt:
      "Développement d'un logiciel de gestion des affichages publicitaires utilisant C# et jQuery. Personnalisation de contrats et factures.",
  },
  {
    title: "Fullstack - Homerez",
    location: "Région de Paris, France",
    companyLink: "https://www.homerez.fr/",
    icon: "homerezImage",
    excerpt:
      "Développement des différentes applications web d'Homerez (CRM, plateforme de réservation) basées sur des technologies Javascript (NodeJS, AngularJS) et MongoDB.",
  },
]

const EDUCATION = [
  {
    title: "École Centrale de Lyon",
    location: "Région de Lyon, France",
    companyLink: "https://www.ec-lyon.fr/",
    icon: "eclImage",
    excerpt: "Formation d'ingénieur généraliste, option informatique.",
  },
]

const Experience = ({ data, title, excerpt, icon, companyLink }) => (
  <div className={styles.experience}>
    <a target="__blank" rel="noopener noreferer" href={companyLink}>
      <Img fixed={data[icon].childImageSharp.fixed} className={styles.icon} />
    </a>
    <div className={styles.description}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.excerpt}>{excerpt}</p>
    </div>
  </div>
)

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const ResumePage = () => {
  const data = useStaticQuery(graphql`
    query {
      hiresweetImage: file(relativePath: { eq: "hiresweet.png" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ayudaImage: file(relativePath: { eq: "ayuda.png" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      homerezImage: file(relativePath: { eq: "homerez.png" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      eclImage: file(relativePath: { eq: "ecl.png" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Resume" />
      <h2>Expériences</h2>
      {EXPERIENCES.map(
        ({ title, location, companyLink, icon, excerpt }, index) => (
          <Experience
            key={index}
            data={data}
            title={title}
            location={location}
            companyLink={companyLink}
            icon={icon}
            excerpt={excerpt}
          />
        )
      )}
      <h2>Formation</h2>
      {EDUCATION.map(
        ({ title, location, companyLink, icon, excerpt }, index) => (
          <Experience
            key={index}
            data={data}
            title={title}
            location={location}
            companyLink={companyLink}
            icon={icon}
            excerpt={excerpt}
          />
        )
      )}
    </Layout>
  )
}

export default ResumePage
