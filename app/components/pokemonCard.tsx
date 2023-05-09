import { PokemonLight } from '../types'
import ImageWithFallback from './imageWithFallback'

interface PokemonCardProps {
  pokemon: PokemonLight | undefined
  id: number
}

export default function PokemonCard(props: PokemonCardProps) {
  return (
    <div className="relative flex h-[108px] w-[104px] animate-fade flex-col items-center justify-between rounded-lg shadow-dp-2">
      <span className="mr-2 mt-1 self-end text-caption text-medium">
        #{props.id}
      </span>
      <span className=" h-[44px] w-full overflow-hidden text-ellipsis whitespace-nowrap  bg-background px-2 pb-1 pt-6 text-center text-body-3 text-dark">
        {props.pokemon?.name}
      </span>

      <ImageWithFallback
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.id}.svg`}
        fallbackSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
        alt={`pokemon ${props.pokemon?.name}`}
        width={80}
        height={80}
        className="absolute left-1/2 top-1/2 h-[68px] -translate-x-1/2 -translate-y-1/2 transform"
      />
    </div>
  )
}
