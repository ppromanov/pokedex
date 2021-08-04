export interface IPokemon {
  id: number;
  name: string;
  type: string;
  image: string;
}
export interface ICard {
  name: string;
  image: string;
  types: [];
  hp: number;
  attack: number;
  defense: number;
  spedialAttack: number;
  specialDefende: number;
  speed: number;
  abilities: [];
}
