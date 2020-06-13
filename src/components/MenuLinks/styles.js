import styled from 'styled-components'
import media from 'styled-media-query'

import AniLink from "gatsby-plugin-transition-link/AniLink";



export const MenuLinksWraper = styled.nav`
${media.lessThan("large")`
display: none;
`}

`


export const MenuLinksList = styled.ul`
font-size: 1.2rem;
font-weight: 300;
`

export const MenuLinksItem = styled.li`

padding: 0.5rem 0;

.active {
  color: var(--menuLinkActive);
}

`

export const MenuLinksLink = styled(AniLink)`
color: var(--menuLinkColor);
text-decoration: none;
transition: color 0.3s;
&:hover {
    color: var(--redLight);
  }
`