import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { FeatureImageWrapper } from '../elements'

export const FeatureImage = ({ fluid }) => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fluid: { originalName: { eq: "meeting-room.jpg" } }) {
        # fixed {
        #   ...GatsbyImageSharpFixed
        # }
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)

  return (
    <FeatureImageWrapper>
      <Img
        // fixed={fixed ? fixed : data.imageSharp.fixed}
        fluid={fluid ? fluid : data.imageSharp.fluid}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </FeatureImageWrapper>
  )
}
