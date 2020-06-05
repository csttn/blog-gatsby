import styled from "styled-components"
import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: #19191a;
  border-left: 1px solid #c3073f;
  box-shadow: 0 0 100px rgba(195, 7, 63, 0.4);
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
  color: #c5c6c7;
  cursor: pointer;
  display: block;
  padding: 1.1rem;
  position: relative;
  width: 20px;
  height: 20px;
  transition: color 0.3s;
  &:hover {
    color: #c3073f;
  }
`