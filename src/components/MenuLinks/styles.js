import styled from 'styled-components'

import { Link } from 'gatsby'

export const MenuLinksWraper = styled.nav``


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

export const MenuLinksLink = styled(Link)`
color: var(--menuLinkColor);
text-decoration: none;
transition: color 0.3s;
&:hover {
    color: var(--redLight);
  }
`