import React from 'react'

import { Home } from '@styled-icons/boxicons-solid/Home'
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt'
import { UpArrowSquare } from '@styled-icons/boxicons-solid/UpArrowSquare'
import { Lightbulb } from '@styled-icons/fa-regular/Lightbulb'
import { GridAlt } from '@styled-icons/boxicons-regular/GridAlt'


import * as S from './styles'

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink
        to="/"
        title="Voltar para Home"
      >
        <S.MenuBarItem><Home size={23} /></S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink
        to="/search"
        title="Pesquisar"
      >
        <S.MenuBarItem><SearchAlt size={23}/></S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItem title="Alterar Tema"><Lightbulb size={23}/></S.MenuBarItem>
      <S.MenuBarItem title="Mudar Visualização"><GridAlt size={23}/></S.MenuBarItem>
      <S.MenuBarItem title="Ir para o topo"><UpArrowSquare size={23}/></S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>


)

export default MenuBar