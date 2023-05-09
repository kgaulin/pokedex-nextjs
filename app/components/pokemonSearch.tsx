'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useDebounce } from '../hooks/debounceHook'
import { getPokemons } from '../queries'
import { extractIdFromUrl } from '../utils/pokemonIdUtil'
import SearchBar from './inputs/searchBar'
import PokemonCard from './pokemonCard'
import SortButton from './sortButton'

export default function PokemonSearch() {
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined)
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  const { data, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['pokemons', debouncedSearchTerm],
    async ({ pageParam }) => {
      return await getPokemons({
        nextPage: pageParam,
        name: debouncedSearchTerm,
      })
    },
    {
      getNextPageParam: (lastPage) => lastPage.next ?? undefined,
    }
  )
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

  const pokemonsList = useMemo(() => {
    const pokemonList = []
    if (data && data.pages) {
      for (const page of data.pages)
        if (page.results) {
          for (const pokemon of page.results) {
            const id = extractIdFromUrl(pokemon.url)
            pokemonList.push(
              <Link href={`/pokemons/${id}`}>
                <PokemonCard pokemon={pokemon} id={id} key={id}></PokemonCard>
              </Link>
            )
          }
        }
    }
    return pokemonList
  }, [data])

  return (
    <>
      <div className="mx-4 mt-2 flex">
        <SearchBar onChange={setSearchTerm}></SearchBar>
        <SortButton className="ml-3"></SortButton>
      </div>
      <div className="mt-6 grid h-full w-full auto-rows-min grid-cols-auto gap-4 overflow-y-auto rounded bg-white p-4">
        {pokemonsList}
        <p className="col-span-full w-full text-center text-body-1" ref={ref}>
          {hasNextPage || isFetching
            ? 'Loading more...'
            : 'Nothing more to load'}
        </p>
      </div>
    </>
  )
}
