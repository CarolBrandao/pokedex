import React from 'react'
import styled from '@emotion/styled'

import Layout from '../components/layout'
import { fetchPokemon } from '../util/api-client'

const Loading = styled.div`
padding-top: 20px;
`

const NotFound = styled.span`
padding: 15px 0px;
display: block;
`

const Input = styled.input`
padding: 12px 20px;
border: 1px solid #ccc;
border-radius: 5px;
`

export default function Index () {
  const [pokemon, setPokemon] = React.useState("")
  const [pokemonArr, setPokemonArr] = React.useState({}) 

  React.useEffect(() => {
    setPokemonArr({})
    fetchPokemon(pokemon).then((response) => {
      return response.json();
    })
    .then((data) => {
        console.log('data', data);
        setPokemonArr(data)
    })
    console.log('pokemonArr',pokemonArr)
  },[pokemon])

  return (
    <Layout>
      <h2>Search for a pokemon</h2>
      <Input autofocus type="text" value={pokemon} onChange={event => setPokemon(event.target.value)} />

      {pokemon && <Loading> Results for {pokemon}.. </Loading>}
      
      {pokemonArr && <img src={pokemonArr.sprites && pokemonArr.sprites.front_default} /> }
      {Object.keys(pokemonArr).length === 0 && pokemon && <NotFound>Not found</NotFound>}
      
    </Layout>
  )
} 
