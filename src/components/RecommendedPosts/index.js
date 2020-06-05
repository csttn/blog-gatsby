import React from 'react'
import propTypes from 'prop-types'

import * as S from './styles'

const RecommendedPosts = ({ next, previous }) => (

  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink
        className="previous"
        to={previous.fields.slug}
      >
        {previous.frontmatter.title}
      </S.RecommendedLink>
    )}
    {next && (
      <S.RecommendedLink
        className="next"
        to={next.fields.slug}
      >
        {next.frontmatter.title}
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>

)

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired
    }),

  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired
    }),
  })
}

export default RecommendedPosts