import React from 'react'

import PropTyps from 'prop-types'
import getThemeColor from '../../utils/getThemeColor'


import * as S from './styles'

const PostItem = ({ slug, category, date, timeToRead, title, description, background }) => (

  <S.PostItemLink 
  to={slug}
  cover
  direction="left"
  bg={getThemeColor()}
  duration={0.6}
  >
    <S.PostItemWrapper>
      <S.PostItemTag
        background={background}
      > {category}</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>{date} - {timeToRead}</S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>

)
PostItem.PropTyps = {
slug: PropTyps.string.isRequired,
background: PropTyps.string,
category: PropTyps.string.isRequired,
date: PropTyps.string.isRequired,
timeToRead: PropTyps.string.isRequired,
title: PropTyps.string.isRequired,
description: PropTyps.string.isRequired
}


export default PostItem;