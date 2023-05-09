import { PokemonSpecies } from '../types'

export default async function PokemonDescription({ id }: { id: string }) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  )
  let pokemonSpecies: PokemonSpecies | undefined
  if (response.status === 200) {
    pokemonSpecies = await response.json()
  }
  const description: string | undefined =
    pokemonSpecies?.flavor_text_entries.find(
      (textEntry) => textEntry.language.name == 'en'
    )?.flavor_text

  return <p className="mx-5 text-body-3 text-dark">{description}</p>
}
