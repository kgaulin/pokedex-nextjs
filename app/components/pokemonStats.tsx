import { PokemonType } from '../types'
import { backgroundTypeColor, textTypeColor } from '../utils/colorUtil'

const statsName = ['HP', 'ATK', 'DEF', 'SATK', 'SDEF', 'SPD']

export default async function PokemonStats({
  stats,
  type,
}: {
  stats: { name: string; value: number }[]
  type: PokemonType
}) {
  return (
    <div className="flex w-full flex-col items-center">
      <h4 className={`text-subtitle-1 ${textTypeColor[type]} mb-4`}>
        Base Stats
      </h4>
      <div className="flex ">
        <div className="flex flex-col">
          {statsName.map((name) => (
            <span
              className={`${textTypeColor[type]} border-r border-light pr-3 text-end text-subtitle-3`}
              key={name}
            >
              {name}
            </span>
          ))}
        </div>
        <div className="flex flex-col">
          {stats.map((stat) => (
            <span
              className={`mx-2  text-end text-body-3 text-dark`}
              key={stat.name}
            >
              {stat.value}
            </span>
          ))}
        </div>
        <div className="mt-1 flex w-[233px] flex-col">
          {stats.map((stat) => (
            <div className="relavtice mb-3 h-1 w-[233px]" key={stat.name}>
              <div
                className={`${backgroundTypeColor[type]} absolute h-1  w-[233px] opacity-30`}
              ></div>
              <div
                className={`h-1 ${backgroundTypeColor[type]} animate-color opacity-100`}
                style={{
                  maxWidth: `${(stat.value * 100) / 255}%`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
