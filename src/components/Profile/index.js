import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Avatar from '../Avatar'

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
      <S.ProfileLink>
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