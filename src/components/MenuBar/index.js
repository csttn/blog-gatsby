import React, { useState, useEffect } from 'react'

import { Home } from '@styled-icons/boxicons-solid/Home'
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt'
import { UpArrowSquare } from '@styled-icons/boxicons-solid/UpArrowSquare'
import { Lightbulb } from '@styled-icons/fa-regular/Lightbulb'
import { GridAlt } from '@styled-icons/boxicons-regular/GridAlt'
import { List } from '@styled-icons/material-rounded/List'


import * as S from './styles'

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)


  const isDarkMode = theme === 'dark';
  const isListMode = display === 'list';

  useEffect(() => {

    setDisplay(window.__display)
    window.__onDisplayChange = () => setDisplay(window.__display)

    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])


  return (
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
          <S.MenuBarItem><SearchAlt size={23} /></S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem title="Alterar Tema" onClick={() => {
          window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
        }}
          className={theme}
        >
          <Lightbulb size={23} />
        </S.MenuBarItem>
        <S.MenuBarItem title="Mudar Visualização" onClick={() => {
          window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
        }}
          id={display}
        >
          {isListMode ? <GridAlt size={23} /> : <List size={23} />}
        </S.MenuBarItem>
        <S.MenuBarItem title="Ir para o topo">
          <UpArrowSquare size={23} />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar