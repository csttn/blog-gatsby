import styled from 'styled-components'
import media from 'styled-media-query'

export const SideBarWrapper = styled.aside`
display: flex;
align-items: center;
flex-direction: column;
position:fixed;
align-items: center;
text-align: center;
width: 20rem;
height: 100vh;
box-shadow: 0 0 100px var(--sideBarBoxShadow);
border-right: 1px solid var(--redLight);
border-radius: 2rem;
background:var(--sideBarBackground);

${media.lessThan("large")`
    align-items: flex-start;
    height: auto;
    padding: 1rem 2rem;
    width: 100%;
  `}
`