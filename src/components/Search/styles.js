import styled from "styled-components"
import media from "styled-media-query"


export const SearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  transition: opacity 0.4s;
  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 3rem;
    ${media.lessThan("large")`
      padding: 0.5rem 1rem;
    `}
  }
  body#grid & {
    .ais-Hits-list {
      background-color: var(--red);
      border-bottom: 1px solid var(--red);
      border-top: 1px solid var(--red);
      display: grid;
      grid-area: card;
      grid-gap: 1px;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      margin-top: 2rem;
    }
    .ais-Hits-item {
      background-color: var(--bodyColor);
    }
  }



  .ais-SearchBox {
    padding-top: 6rem;
    ${media.lessThan("large")`
      padding-top: 1rem;
    `}
  }
  .ais-Stats {
    margin: 0 auto;
    color: var(--red);
  }

.ais-SearchBox-resetIcon{

  color:var(--red);

}
  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 1px solid var(--searchBorder);
    color: var(--searchColor);
    display: flex;
    font-size: 1.6rem;
    padding: 0.5rem;
    width: 60%;
    margin: 0 auto;
    &::placeholder {
      color: var(--searchColor);
    }
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`