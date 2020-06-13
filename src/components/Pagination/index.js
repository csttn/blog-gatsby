import React from 'react'
import propTyps from 'prop-types'

import AniLink from "gatsby-plugin-transition-link/AniLink";

import getThemeColor from '../../utils/getThemeColor'

import { SkipNextCircle } from '@styled-icons/boxicons-regular/SkipNextCircle'
import { SkipPreviousCircle } from '@styled-icons/boxicons-regular/SkipPreviousCircle'



import * as S from './styles'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (


  <S.PaginationWrapper>
    {!isFirst &&
      <AniLink to={prevPage}
      cover
      direction="right"
      bg={getThemeColor()}
      duration={0.6}
      >
        <SkipPreviousCircle size={30} />
        <p>Página Anterior</p>
      </AniLink>
    }
    <p>Página {currentPage} de {numPages}</p>
    {!isLast &&
      <AniLink to={nextPage}
      cover
      direction="left"
      bg={getThemeColor()}
      duration={0.6}
      >
        <p> Próxima página</p>
        <SkipNextCircle size={30} />
      </AniLink>
    }

  </S.PaginationWrapper>
)

Pagination.propTyps = {
  isFirst: propTyps.bool.isRequired,
  isLast: propTyps.bool.isRequired,
  currentPage: propTyps.number.isRequired,
  numPages: propTyps.number.isRequired,
  prevPage: propTyps.string,
  nextPage: propTyps.string
}

export default Pagination

