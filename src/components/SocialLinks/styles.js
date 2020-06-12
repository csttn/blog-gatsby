import styled from "styled-components"

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: var(--socialLinksColor);
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: var(--socialLinksColorHover);
  }
`

export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
`