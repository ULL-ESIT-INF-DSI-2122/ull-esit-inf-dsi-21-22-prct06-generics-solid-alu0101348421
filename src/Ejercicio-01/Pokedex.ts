import { fighter } from './Fighter';
import { Pokemon } from './Pokemon';
import { Saiyan } from './Saiyan';
import { SwordArtOnline } from './SAO';

export class Pokedex {
  PokemonList: Pokemon[];
  SAOList: SwordArtOnline[];
  SaiyanList: Saiyan[];

  constructor() {
    this.PokemonList = [];
    this.SAOList = [];
    this.SaiyanList = [];
  }

  public addFighter(fighter: fighter): void {
    if (fighter instanceof Pokemon) {
      this.PokemonList.push(fighter);
    } else if (fighter instanceof SwordArtOnline) {
      this.SAOList.push(fighter);
    } else {
      this.SaiyanList.push(fighter as Saiyan);
    }
  }

  public getFighter(name: string): fighter | undefined {
    for (let pokemon of this.PokemonList) {
      if (pokemon.getName() === name) {
        return pokemon;
      }
    }
    for (let sao of this.SAOList) {
      if (sao.getName() === name) {
        return sao;
      }
    }
    for (let saiyan of this.SaiyanList) {
      if (saiyan.getName() === name) {
        return saiyan;
      }
    }
    return undefined;
  }

  public getAllFighters(): fighter[] {
    let allFighters: fighter[] = [];
    allFighters = allFighters.concat(this.PokemonList);
    allFighters = allFighters.concat(this.SAOList);
    allFighters = allFighters.concat(this.SaiyanList);
    return allFighters;
  }
}
