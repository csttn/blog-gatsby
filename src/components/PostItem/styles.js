import styled from 'styled-components'

import { Link } from 'gatsby'

export const PostItemLink = styled(Link)`
color: var(--postItemLink);
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
transition: color 0.3s;
padding:5px;
margin: 0.4rem 0;
transition: 0.7s;
&:hover{
  color: var(--postItemLinkHover);
}

body#grid & {
  background: var(--bodyColor);
 
}
`

export const PostItemWrapper = styled.section`
align-items: center;
display: flex;
padding: 2rem 3rem;
width: 60%;
border-bottom: 1px solid var(--postItemLinkBorder);
border-right: 1px solid var(--postItemLinkBorder);
border-left:  1px solid var(--postItemLinkBorder);
border-radius: 40px;
transition-property: border, width, box-shadow;
transition-duration: 0.7s;

&:hover{
  box-shadow: 0 0 100px var(--postItemLinkBoxShadow);
  width:66%;
  border-bottom: 1px solid var(--postItemLinkBorderHover);
  border-right: 1px solid var(--postItemLinkBorderHover);
  border-left:  1px solid var(--postItemLinkBorderHover);
}

body#grid & {
  padding: 2rem 1rem;
  flex-direction: column;
  justify-content: center;
  border: 1px solid var(--postItemLinkBorder);
}
`

export const PostItemTag = styled.div`
align-items: center;
background: ${props => props.background ? props.background : 'var(--redFaint)'};
border-radius: 50%;
color: var(--postItemLinkTag);
display: flex;
font-size: 1.3rem;
font-weight: 700;
justify-content: center;
min-height: 90px;
min-width:90px;
text-transform: uppercase;

body#grid & { 
margin-bottom: 1.5rem;
}
`

export const PostItemInfo = styled.div`
display: flex;
flex-direction: column;
margin-left: 1.5rem;
`

export const PostItemDate = styled.time`
font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
font-size:1.6rem;
font-weight: 700;
margin: 0.2rem 0 0.5rem;

body#grid & {
line-height: 1.1;
margin: 0.8rem 0;
}
`

export const PostItemDescription = styled.p`
font-size: 1.2rem;
font-weight: 300;
line-height: 1.2rem;
`