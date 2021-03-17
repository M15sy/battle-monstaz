import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from 'src/theme'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    min-height: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background: ${theme.colors.black};
    color: ${theme.colors.white};
  }

  * {
    box-sizing: border-box;
    font-family: ${theme.font};
    text-align: center;
    line-height: 2rem;
  }

  [id=__next] {
    min-height: 100%;
  }
`

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
