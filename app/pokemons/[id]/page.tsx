import { LeftArrowIcon, PokeballIcon } from '@/app/components/icons'
import ImageWithFallback from '@/app/components/imageWithFallback'
import NextPokemonButton from '@/app/components/nextPokemonButton'
import PokemonAbout from '@/app/components/pokemonAbout'
import PokemonDescription from '@/app/components/pokemonDescription'
import PokemonStats from '@/app/components/pokemonStats'
import PokemonTypes from '@/app/components/pokemonTypes'
import PreviousPokemonButton from '@/app/components/previousPokemonButton'
import { Pokemon, PokemonType } from '@/app/types'
import { backgroundTypeColor } from '@/app/utils/colorUtil'
import { padLeft } from '@/app/utils/stringUtil'
import Link from 'next/link'

export default async function PokemonId({
  params,
}: {
  params: { id: string }
}) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
  let pokemon: Pokemon | undefined
  if (response.status === 200) {
    pokemon = await response.json()
  }
  const type: PokemonType = (pokemon?.types[0].type.name ??
    'normal') as PokemonType

  return (
    <div
      className={`relative flex flex h-screen w-full flex-col ${backgroundTypeColor[type]}`}
    >
      <PokeballIcon
        className=" absolute bottom-[40%] right-[5px] top-[5px] fill-white  opacity-10 lg:hidden"
        width="60vw"
        height="60vw"
      ></PokeballIcon>
      <ImageWithFallback
        className="absolute left-1/2 top-[35%] h-[25%] w-auto  -translate-x-1/2 -translate-y-full transform"
        src={pokemon?.sprites.other?.dream_world.front_default ?? ''}
        fallbackSrc={pokemon?.sprites.front_default ?? ''}
        alt={pokemon?.name ?? 'Pokemon image'}
        width={200}
        height={200}
      ></ImageWithFallback>

      <PreviousPokemonButton
        className="absolute left-[20px] top-[23%]"
        id={pokemon?.id ?? 0}
      ></PreviousPokemonButton>
      {/* @ts-expect-error Server Component */}
      <NextPokemonButton
        className="absolute right-[20px] top-[23%]"
        id={pokemon?.id ?? 0}
      ></NextPokemonButton>
      <div className=" mx-5 my-5 flex   ">
        <Link href={'/'}>
          <LeftArrowIcon className="h-[32px] w-[32px] fill-white"></LeftArrowIcon>
        </Link>
        <div className="ml-2 text-headline capitalize text-white">
          {pokemon?.name}
        </div>
        <div className="ml-auto text-subtitle-2 text-white">
          #{padLeft(pokemon!.id, 3)}
        </div>
      </div>

      <div className="m-1 mt-auto flex h-[70%] flex-col items-center justify-evenly justify-self-end rounded-lg bg-white  shadow-inset-dp-2">
        {/* @ts-expect-error Server Component */}
        <PokemonTypes
          types={pokemon?.types.map((type) => type.type.name) as PokemonType[]}
        ></PokemonTypes>

        {/* @ts-expect-error Server Component */}
        <PokemonAbout
          type={type}
          weight={pokemon?.weight ?? 0}
          height={pokemon?.height ?? 0}
          moves={pokemon?.moves.map((move) => move.move.name).slice(0, 2) ?? []}
        ></PokemonAbout>
        {/* @ts-expect-error Server Component */}
        <PokemonDescription id={pokemon?.id}></PokemonDescription>
        {/* @ts-expect-error Server Component */}
        <PokemonStats
          stats={
            pokemon?.stats.map((stat) => {
              return { name: stat.stat.name, value: stat.base_stat }
            }) ?? []
          }
          type={type}
        ></PokemonStats>
      </div>
    </div>
  )
}
