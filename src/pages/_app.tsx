import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

// Styles
import theme from '../global/theme'
import GlobalStyle from '../global'
import { ContextTestProvider } from '../contexts/useContextTest'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ContextTestProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </ContextTestProvider>
  )
}

export default MyApp
