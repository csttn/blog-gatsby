import styled from "styled-components"
import media from "styled-media-query"

import AniLink from "gatsby-plugin-transition-link/AniLink";


export const RecommendedWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 5rem;
  width: 70%;
  margin : 0 auto 1rem auto;
`

export const RecommendedLink = styled(AniLink)`
  align-items: center;
  justify-content: center;
  color: var(--recommendedLinkColor);
  display: flex;
  padding: 1rem;
  text-decoration: none;
  transition-property: background, border;
  transition-duration: 0.7s;
  width: 50%;
  border: 1px solid var(--recommendedLinkBorderColor);
  margin: 0 20px;
  border-radius: 2rem;

  ${media.lessThan("large")`
    padding: 2rem 1rem;
    line-height: 1.3;
    font-size: .9rem;
  `}

  &:hover {
    background: var(--recommendedLinkHoverBackground);
    color: var(--recommendedLinkHoverColor);
  }
  &.previous {
   
  }
  &.next {
  
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`