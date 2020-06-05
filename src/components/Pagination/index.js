import React from 'react'
import propTyps from 'prop-types'
import { Link } from 'gatsby'


import { SkipNextCircle } from '@styled-icons/boxicons-regular/SkipNextCircle'
import { SkipPreviousCircle } from '@styled-icons/boxicons-regular/SkipPreviousCircle'



import * as S from './styles'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (


  <S.PaginationWrapper>
    {!isFirst &&
      <Link to={prevPage}>
        <SkipPreviousCircle size={30} />
        <p>Página Anterior</p>
      </Link>
    }
    <p>Página {currentPage} de {numPages}</p>
    {!isLast &&
      <Link to={nextPage}>
        <p> Próxima página</p>
        <SkipNextCircle size={30} />
      </Link>
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

