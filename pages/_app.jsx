import { createGlobalStyle, ThemeProvider } from "styled-components"

import theme from '../src/theme'

const GlobalStyle = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
    }

    body {
      font-family: 'Roboto', sans-serif;
      color: ${props => props.theme.black};

      a {
        color: ${props => props.theme.primary};
        font-weigth: bold;
        text-decoration: none;
      }

      a:hover {
        color: ${props => props.theme.primaryHover};
        transition: all 0.3s;
      }
    }
`

function App ({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme} >
        <GlobalStyle/>
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App