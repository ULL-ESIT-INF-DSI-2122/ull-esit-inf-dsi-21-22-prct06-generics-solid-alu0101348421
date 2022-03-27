import { fighter } from './Fighter';

/**
 * Clase que representa a un Pokemon
 * @class Pokemon
 * @attribute {string} name Nombre del pokemon
 * @attribute {number} weight Peso del pokemon
 * @attribute {number} height Altura del pokemon
 * @attribute {number} attack Ataque del pokemon
 * @attribute {number} defense Defensa del pokemon
 * @attribute {number} hp Health Points del pokemon
 * @attribute {number} velocity Velocidad del pokemon
 * @attribute {string} type Tipo del pokemon
 * @attribute {string[]} catchingPhrases Frases que usa el pokemon
 */
export class Pokemon extends fighter {
  private velocity: number;
  private type: string;

  /**
   * Constructor
   * @param name {string} Nombre del pokemon
   * @param weight {number} Peso del pokemon
   * @param height {number} Altura del pokemon
   * @param attack {number} Ataque del pokemon
   * @param defense {number} Defensa del pokemon
   * @param hp {number} Health Points del pokemon
   * @param velocity {number} Velocidad del pokemon
   * @param type {string} Tipo del pokemon
   * @param catchingPhrases {string[]} Frases que usa el pokemon
   */
  constructor(name: string, weight: number, height: number,
      attack: number, defense: number, hp: number,
      velocity: number, type: 'fuego' | 'agua' | 'hierba' |
      'electrico' | 'normal', ...catchingPhrases: string[]) {
    super(name, weight, height, attack, defense, hp, ...catchingPhrases);
    this.velocity = velocity;
    this.type = type;
  }

  /**
   * Método que devuelve la velocidad del pokemon
   * @returns {number} Velocidad del pokemon
   */
  public getVelocity(): number {
    return this.velocity;
  }

  /**
   * Método que devuelve el tipo del pokemon
   * @returns {string} Tipo del pokemon
   */
  public getType(): string {
    return this.type;
  }

  /**
   * Método que devuelve la efectividad de un ataque
   * @param aType {string} Tipo del pokemon atacante
   * @param bType {string} Tipo del pokemon atacado
   * @returns {number} Efectividad del ataque
   */
  private effectiveness(aType: string, bType: string): number {
    if (aType === bType) {
      return 0.5;
    } else if (aType === 'fuego' && bType === 'hierba') {
      return 2;
    } else if (aType === 'fuego' && bType === 'agua') {
      return 0.5;
    } else if (aType === 'fuego' && bType === 'electrico') {
      return 1;
    } else if (aType === 'fuego' && bType === 'normal') {
      return 1;
    } else if (aType === 'agua' && bType === 'hierba') {
      return 0.5;
    } else if (aType === 'agua' && bType === 'electrico') {
      return 0.5;
    } else if (aType === 'agua' && bType === 'normal') {
      return 1;
    } else if (aType === 'hierba' && bType === 'electrico') {
      return 1;
    } else if (aType === 'hierba' && bType === 'normal') {
      return 2;
    } else if (aType === 'electrico' && bType === 'normal') {
      return 1;
    } else {
      const checkInverse: number = this.effectiveness(bType, aType);
      if (checkInverse === 2) {
        return 0.5;
      } else if (checkInverse === 0.5) {
        return 2;
      } else {
        return 1;
      }
    }
  }

  /**
   * Método que devuelve el daño de un ataque
   * @param enemy {fighter} Enemigo contra el que se ataca
   * @returns {number} Daño del ataque
   */
  public getDamage(enemy: fighter): number {
    if (enemy instanceof Pokemon) {
      return 50 * (this.attack / enemy.getDefense()) *
          this.effectiveness(this.type, enemy.type);
    } else {
      return 50 * (this.attack / enemy.getDefense());
    }
  }
}