import { Hydrate, dehydrate } from '@tanstack/react-query'
import { PokeballIcon } from './components/icons'
import PokemonSearch from './components/pokemonSearch'
import getQueryClient from './getQueryClient'
import { getPokemons } from './queries'

export default async function Home() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['pokemons'], () => getPokemons())
  const dehydratedState = dehydrate(queryClient)

  return (
    <div className="flex h-screen w-full bg-primary">
      <div className=" flex h-screen w-full flex-col px-1 pb-0.5">
        <div className="flex items-baseline pl-3 pt-4">
          <PokeballIcon className="mr-4 h-[24px] w-[24px] fill-white"></PokeballIcon>
          <h1 className="text-headline text-white">Pokédex</h1>
        </div>
        <Hydrate state={dehydratedState}>
          <PokemonSearch></PokemonSearch>
        </Hydrate>
      </div>
    </div>
  )
}
