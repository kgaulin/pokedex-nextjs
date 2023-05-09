import { PokemonType } from '../types'
import { textTypeColor } from '../utils/colorUtil'
import { StraightenIcon, WeightIcon } from './icons'

export default async function PokemonAbout({
  weight,
  height,
  moves,
  type,
}: {
  weight: number
  height: number
  moves: string[]
  type: PokemonType
}) {
  return (
    <div className="flex flex-col items-center">
      <h4 className={`text-subtitle-1 ${textTypeColor[type]} mb-4`}>About</h4>
      <div className="flex ">
        <div className="flex min-w-[100px] flex-col items-center border-r border-light ">
          <div className="flex items-center">
            <WeightIcon className="mr-1 h-[16px] w-[16px] fill-dark"></WeightIcon>
            <span className="text-body-3 text-dark">{weight} kg</span>
          </div>
          <span className="mt-2 mt-auto text-caption text-medium">Weight</span>
        </div>
        <div className="flex min-w-[100px] flex-col items-center border-r border-light">
          <div className="flex items-center">
            <StraightenIcon className="mr-1 h-[16px] w-[16px] rotate-90 fill-dark"></StraightenIcon>
            <span className="text-body-3 text-dark">{height} m</span>
          </div>
          <span className="mt-2 mt-auto  text-caption text-medium">Height</span>
        </div>
        <div className="flex min-w-[100px] flex-col items-center">
          <div className="flex flex-col items-center">
            {moves.map((move) => (
              <span className="text-body-3 capitalize text-dark" key={move}>
                {move}
              </span>
            ))}
          </div>
          <span className="mt-2 mt-auto  text-caption text-medium">Moves</span>
        </div>
      </div>
    </div>
  )
}
