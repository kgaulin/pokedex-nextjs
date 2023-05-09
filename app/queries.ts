import { Pokemon, PokemonResults } from './types'

export const getPokemons = async (args?: {
  name?: string
  nextPage?: string
}): Promise<PokemonResults> => {
  if (args && args.nextPage) {
    return (await fetch(args.nextPage).then((response) =>
      response.json()
    )) as PokemonResults
  }

  if (args && args.name) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${args.name}`
    )
    if (response.status === 404) {
      return { count: 0, results: [] }
    }
    const pokemon = (await response.json()) as Pokemon
    return {
      count: 1,
      results: [
        {
          name: pokemon.name,
          url: `https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`,
        },
      ],
    }
  }

  return (await fetch('https://pokeapi.co/api/v2/pokemon?limit=150').then(
    (response) => response.json()
  )) as PokemonResults
}
