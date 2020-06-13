import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Avatar from '../Avatar'

import getThemeColor from '../../utils/getThemeColor'


import * as S from './styles'

const Profile = () => {
  const {
    site: {
      siteMetadata: {
        author,
        description,
        position,
      }
    }
  } = useStaticQuery(graphql`
  query MyQuery {
    site {
      siteMetadata {
        author
        description
        position
      }
    }
  }
  `)
  return (
    <S.ProfileWrapper>
      <S.ProfileLink 
      to="/"
      cover
      direction="left"
      bg={getThemeColor()}
      duration={0.6}>
        <Avatar />
        <S.ProfileAuthor>
          <h1>{author}</h1>
          <S.ProfilePosition>
            <h2>{position}</h2>
          </S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>

      <S.ProfileDescription>
        <p>{description}</p>
      </S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile