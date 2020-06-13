import styled from "styled-components"
import media from 'styled-media-query'

import AniLink from "gatsby-plugin-transition-link/AniLink";


export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--menuBarBackground);
  border-left: 1px solid var(--menuBarBorderleft);
  box-shadow: 0 0 100px var(--menuBarBoxShadow);
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  position: fixed;
  right: 0;
  width: 3.75rem;


  ${media.lessThan("large")`
    bottom: 0;
    flex-direction: row;
    height: auto;
    padding: 0;
    position: fixed;
    width: 100%;
  `}
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  ${media.lessThan("large")`
    flex-direction: row;
  `}
`

export const MenuBarLink = styled(AniLink)`
  display: block;
`

export const MenuBarItem = styled.span`
  color: var(--menuBarItem);
  cursor: pointer;
  display: block;
  padding: 1.1rem;
  position: relative;
  width: 20px;
  height: 20px;
  transition: color 0.3s;
  &:hover {
    color: var(--hoverMenuBarItem);
  }

  &.light {
    color: #bab2b5;

    &:hover {
    color: var(--hoverMenuBarItem);
  }
  }
  &.display {
    ${media.lessThan("large")`
      display: none;
    `}
  }
  ${media.greaterThan("large")`

  `}
  ${media.lessThan("large")`
    height: 3.2rem;
    padding: .9rem;
    position: relative;
    width: 3.2rem;
  `}

 
`