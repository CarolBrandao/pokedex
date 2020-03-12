import Head from 'next/head'
import Navbar from './navbar'

export default function Layout(props){
    return(
      <React.Fragment>
        <Head>
          <title>Pokedex</title>
        </Head>
        <Navbar />
        {props.children}
      </React.Fragment>
    )
}