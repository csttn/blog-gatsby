import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styles'

const Avatar = () => {

  const { avatarImage } = useStaticQuery(graphql`
query{
  avatarImage: file(relativePath: {eq: "cleyton.jpg"}) {
    childImageSharp {
      fixed(width:80, height: 80){
        ...GatsbyImageSharpFixed_tracedSVG
      }
    }
  }
}

`)

  return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar