import Head from 'next/head'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'

import Navbar from './navbar'
import theme from '../theme'
import { GlobalStyles } from '../global-styles'

const App = styled.div`
  padding: 10px 50px;
`

export default function Layout(props){
    return(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Head>
          <title>Pokedex</title>
        </Head>
        <Navbar />
        <App>
          {props.children}
        </App>
      </ThemeProvider>
    )
}