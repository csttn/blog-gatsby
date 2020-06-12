import styled from "styled-components"
import { Link } from "gatsby"

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
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`

export const MenuBarLink = styled(Link)`
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
`