import Link from 'next/link'
import { LeftChevronIcon } from './icons'

export default function PreviousPokemonButton({
  id,
  className,
}: {
  id: number
  className?: string
}) {
  return (
    <>
      {id > 1 && (
        <Link className={className} href={`/pokemons/${id - 1}`}>
          <LeftChevronIcon className="h-[24px] w-[24px] fill-white"></LeftChevronIcon>
        </Link>
      )}
    </>
  )
}
