export const pokemonTypeValues = [
  'bug',
  'dark',
  'dragon',
  'electric',
  'fairy',
  'fighting',
  'fire',
  'flying',
  'ghost',
  'normal',
  'grass',
  'ground',
  'ice',
  'poison',
  'psychic',
  'rock',
  'steel',
  'water',
] as const

export type PokemonType = (typeof pokemonTypeValues)[number]

export type Pokemon = {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: Ability[]
  forms: Species[]
  game_indices: GameIndex[]
  held_items: HeldItem[]
  location_area_encounters: string
  moves: Move[]
  species: Species
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  past_types: PastType[]
}

export type PokemonLight = {
  name: string
  url: string
}

export type PokemonResults = {
  count: number
  next?: string
  previous?: string
  results: PokemonLight[]
}

export type Ability = {
  is_hidden: boolean
  slot: number
  ability: Species
}

export type Species = {
  name: string
  url: string
}

export type GameIndex = {
  game_index: number
  version: Species
}

export type HeldItem = {
  item: Species
  version_details: VersionDetail[]
}

export type VersionDetail = {
  rarity: number
  version: Species
}

export type Move = {
  move: Species
  version_group_details: VersionGroupDetail[]
}

export type VersionGroupDetail = {
  level_learned_at: number
  version_group: Species
  move_learn_method: Species
}

export type PastType = {
  generation: Species
  types: Type[]
}

export type Type = {
  slot: number
  type: Species
}

export type GenerationV = {
  'black-white': Sprites
}

export type GenerationIv = {
  'diamond-pearl': Sprites
  'heartgold-soulsilver': Sprites
  platinum: Sprites
}

export type Versions = {
  'generation-i': GenerationI
  'generation-ii': GenerationIi
  'generation-iii': GenerationIii
  'generation-iv': GenerationIv
  'generation-v': GenerationV
  'generation-vi': { [key: string]: Home }
  'generation-vii': GenerationVii
  'generation-viii': GenerationViii
}

export type Sprites = {
  back_default: string
  back_female: null
  back_shiny: string
  back_shiny_female: null
  front_default: string
  front_female: null
  front_shiny: string
  front_shiny_female: null
  other?: Other
  versions?: Versions
  animated?: Sprites
}

export type GenerationI = {
  'red-blue': RedBlue
  yellow: RedBlue
}

export type RedBlue = {
  back_default: string
  back_gray: string
  front_default: string
  front_gray: string
}

export type GenerationIi = {
  crystal: Crystal
  gold: Crystal
  silver: Crystal
}

export type Crystal = {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}

export type GenerationIii = {
  emerald: Emerald
  'firered-leafgreen': Crystal
  'ruby-sapphire': Crystal
}

export type Emerald = {
  front_default: string
  front_shiny: string
}

export type Home = {
  front_default: string
  front_female: null
  front_shiny: string
  front_shiny_female: null
}

export type GenerationVii = {
  icons: DreamWorld
  'ultra-sun-ultra-moon': Home
}

export type DreamWorld = {
  front_default: string
  front_female: null
}

export type GenerationViii = {
  icons: DreamWorld
}

export type Other = {
  dream_world: DreamWorld
  home: Home
  'official-artwork': OfficialArtwork
}

export type OfficialArtwork = {
  front_default: string
}

export type Stat = {
  base_stat: number
  effort: number
  stat: Species
}

export type PokemonSpecies = {
  base_happiness: number
  capture_rate: number
  color: Color
  egg_groups: Color[]
  evolution_chain: EvolutionChain
  evolves_from_species: null
  flavor_text_entries: FlavorTextEntry[]
  form_descriptions: any[]
  forms_switchable: boolean
  gender_rate: number
  genera: Genus[]
  generation: Color
  growth_rate: Color
  habitat: Color
  has_gender_differences: boolean
  hatch_counter: number
  id: number
  is_baby: boolean
  is_legendary: boolean
  is_mythical: boolean
  name: string
  names: Name[]
  order: number
  pal_park_encounters: PalParkEncounter[]
  pokedex_numbers: PokedexNumber[]
  shape: Color
  varieties: Variety[]
}

export type Color = {
  name: string
  url: string
}

export type EvolutionChain = {
  url: string
}

export type FlavorTextEntry = {
  flavor_text: string
  language: Color
  version: Color
}

export type Genus = {
  genus: string
  language: Color
}

export type Name = {
  language: Color
  name: string
}

export type PalParkEncounter = {
  area: Color
  base_score: number
  rate: number
}

export type PokedexNumber = {
  entry_number: number
  pokedex: Color
}

export type Variety = {
  is_default: boolean
  pokemon: Color
}
