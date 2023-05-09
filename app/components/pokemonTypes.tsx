import { PokemonType } from '../types'
import TypeChip from './typeChip'

export default async function PokemonTypes({
  types,
}: {
  types: PokemonType[]
}) {
  return (
    <div className="flex ">
      <>
        {types.map((type) => (
          <TypeChip className="mr-4" type={type} key={type}></TypeChip>
        ))}
      </>
    </div>
  )
}
