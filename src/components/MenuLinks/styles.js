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
  color: #c3073f;
}
`

export const MenuLinksLink = styled(Link)`
  color: #c5c6c7;
text-decoration: none;
transition: color 0.3s;
&:hover {
    color: #c3073f;
  }
`