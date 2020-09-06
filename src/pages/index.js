import React from 'react'
import { Container, FeatureImage, Content, ContentCard } from '../components'

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date='September 6, 2020'
          title='Lorem ipsum baby!'
          excerpt='Amet sit dolor ludus tonalis'
          slug='/test'
        />
      </Content>
    </Container>
  )
}

export default IndexPage
