import React from 'react'
import { graphql } from 'gatsby'
import { Container, Content, FeatureImage } from '../components'
import { H1 } from '../elements'

const notFound = ({ data }) => {
  const featureImage = data.imageSharp.fluid
  return (
    <Container>
      <FeatureImage fluid={featureImage} />
      <Content>
        <H1 textAlign='center' margin='0 0 1rem 0'>
          What you're looking for could not be found.
        </H1>
      </Content>
    </Container>
  )
}

export default notFound

export const notFoundQuery = graphql`
  query NotFoundQuery {
    imageSharp(fluid: { originalName: { eq: "sad-cat.jpg" } }) {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
