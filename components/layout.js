import Head from 'next/head'
import { ThemeProvider } from 'emotion-theming'

import Navbar from './navbar'
import theme from '../theme'
import { GlobalStyles } from '../global-styles'


export default function Layout(props){
    return(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Head>
          <title>Pokedex</title>
        </Head>
        <Navbar />
        {props.children}
      </ThemeProvider>
    )
}