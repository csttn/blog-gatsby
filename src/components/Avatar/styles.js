import styled from 'styled-components'

import media from 'styled-media-query'

import Img from 'gatsby-image'

export const AvatarWrapper = styled(Img)`

width: 3.75rem;
border-radius: 50%;
height:3.75rem;
margin: auto;

${media.lessThan("large")`
width: 1.875rem;
height:1.875rem;


`}

`