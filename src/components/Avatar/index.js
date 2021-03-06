import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styles'

const Avatar = () => {

  const { avatarImage } = useStaticQuery(graphql`
query{
  avatarImage: file(relativePath: {eq: "cleyton.jpg"}) {
    childImageSharp {
      fluid(maxWidth:80){
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}

`)

  return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
}

export default Avatar