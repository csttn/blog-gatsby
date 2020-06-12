import styled from 'styled-components'

export const PaginationWrapper = styled.section`
display: flex;
align-items: center;
border-top: 1px solid var(--paginationBorder);
color: var(--paginationColor);
padding: 1rem 1rem;
justify-content: space-between;
margin-top: 1rem;

p{
  margin: 0 6rem;
}

a{ 
  display: flex;
  flex-direction: row;
  color: var(--paginationLinkColor);
  text-decoration: none;
  transition: color 0.7s;
  margin: 0 6rem;


p{
  margin: auto 1rem;
}
  &:hover{
    color:var(--paginationLinkHover);
    
  }
}

`