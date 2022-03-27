import { fighter } from './Fighter';
import { Pokemon } from './Pokemon';
import { Saiyan } from './Saiyan';
import { SwordArtOnline } from './SAO';

/**
 * Clase que representa a un registro de un luchadores
 * @class Pokedex
 * @attribute {Pokemon[]} PokemonList Lista de pokemon
 * @attribute {Saiyan[]} SaiyanList Lista de saiyans
 * @attribute {SwordArtOnline[]} SAOList Lista de Sword Art Online Players
 */
export class Pokedex {
  PokemonList: Pokemon[];
  SAOList: SwordArtOnline[];
  SaiyanList: Saiyan[];

  /**
   * Constructor
   */
  constructor() {
    this.PokemonList = [];
    this.SAOList = [];
    this.SaiyanList = [];
  }

  /**
   * Método que permite añadir un luchador a su lista correspondiente
   * @param fighter {fighter} Luchador a añadir
   */
  public addFighter(fighter: fighter): void {
    if (fighter instanceof Pokemon) {
      this.PokemonList.push(fighter);
    } else if (fighter instanceof SwordArtOnline) {
      this.SAOList.push(fighter);
    } else {
      this.SaiyanList.push(fighter as Saiyan);
    }
  }

  /**
   * Método que devuelve un luchador a partir de su nombre
   * @param name {string} Nombre del luchador
   * @returns {fighter} Luchador
   */
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

  /**
   * Método que devuelve una lista con todos los luchadores
   * @returns {fighter[]} Lista de luchadores
   */
  public getAllFighters(): fighter[] {
    let allFighters: fighter[] = [];
    allFighters = allFighters.concat(this.PokemonList);
    allFighters = allFighters.concat(this.SAOList);
    allFighters = allFighters.concat(this.SaiyanList);
    return allFighters;
  }
}
