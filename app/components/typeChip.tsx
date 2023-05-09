import { PokemonType } from '../types'
import { backgroundTypeColor } from '../utils/colorUtil'

interface TypeChipProps {
  type: PokemonType
  className?: string
}

export default function TypeChip(props: TypeChipProps) {
  return (
    <span
      className={`px-2 py-0.5 text-subtitle-3 text-white ${
        backgroundTypeColor[props.type]
      }  rounded-xl capitalize ${props.className}`}
    >
      {props.type}
    </span>
  )
}
