import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FooterWrapper, FooterSocialWrapper, FooterSocialIcons } from '../elements'

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "twitter.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <img src={data.facebook.publicURL} alt='Share on Facebook' />
          </a>
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
            <img src={data.linkedin.publicURL} alt='Share on LinkedIn' />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            <img src={data.instagram.publicURL} alt='Share on Instagram' />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <img src={data.twitter.publicURL} alt='Share on Twitter' />
          </a>
        </FooterSocialIcons>
        <p>©2020 Koamar. All rights reserved.</p>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
