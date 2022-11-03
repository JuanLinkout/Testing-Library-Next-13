import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

// Styles
import theme from '../global/theme'
import GlobalStyle from '../global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
export default MyApp
