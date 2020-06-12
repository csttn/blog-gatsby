import styled from 'styled-components'
import { Link } from 'gatsby'


export const ProfileWrapper = styled.section`

display: flex;
flex-direction: column;
color: var(--profileWrapper);
margin-top: 2rem;
`

export const ProfileLink = styled(Link)`
color: var(--profileLinkColor);
text-decoration: none;
transition: color 0.4s;

&:hover {
  color:var(--profileLinkColorHover);
  filter: brightness(120%);
}
`

export const ProfileAuthor = styled.h1`
font-size: 1.6rem;
margin: 0.5rem auto 1.5rem;
`
export const ProfilePosition = styled.small`
display: block;
font-size: 1rem;
font-weight: 300;
`

export const ProfileDescription = styled.p`
font-size: 1rem;
font-weight: 300;
line-height: 1.4;
margin: 0 0.5rem;
`