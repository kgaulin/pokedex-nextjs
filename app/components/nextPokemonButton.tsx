import Link from 'next/link'
import { PokemonResults } from '../types'
import { RightChevronIcon } from './icons'

export default async function NextPokemonButton({
  id,
  className,
}: {
  id: number
  className?: string
}) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1`)
  let pokemonResult: PokemonResults | undefined
  if (response.status === 200) {
    pokemonResult = await response.json()
  }
  console.log(JSON.stringify(pokemonResult))
  const showButton: boolean = pokemonResult != null && pokemonResult.count > id

  return (
    <>
      {showButton && (
        <Link className={className} href={`/pokemons/${id + 1}`}>
          <RightChevronIcon className="h-[24px] w-[24px] fill-white"></RightChevronIcon>
        </Link>
      )}
    </>
  )
}
