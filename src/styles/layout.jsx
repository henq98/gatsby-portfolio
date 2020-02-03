import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
*, 
::after, 
::before {
  box-sizing: border-box;
}
html, body {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  a {
    text-decoration: none;
  }
}
`
export const Layout = styled.div`
  > div {
    min-height: 100vh;
    height: auto;
    position: relative;
  }
`
