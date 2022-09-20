import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

function HtmlHead({ description, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const formattedTitle = `${title} | ${site.siteMetadata.title}`
  return (
    <>
      <title>{formattedTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
    </>
  )
}

HtmlHead.defaultProps = {
  lang: `en`,
  description: ``,
}

HtmlHead.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default HtmlHead
