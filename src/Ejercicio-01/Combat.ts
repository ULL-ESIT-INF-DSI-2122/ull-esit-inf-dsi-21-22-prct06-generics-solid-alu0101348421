import { fighter } from './Fighter';

/**
 * Clase que representa un combate entre dos luchadores
 * @class Combat
 * @attribute {Fighter} fighter1
 * @attribute {Fighter} fighter2
 */
export class Combat {
  private fighter1: fighter;
  private fighter2: fighter;

  /**
   * Constructor
   * @param fighter1 {Fighter} Luchador 1
   * @param fighter2 {Fighter} Luchador 2
   * @constructor
   */
  constructor(fighter1: fighter, fighter2: fighter) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
  }

  /**
   * Método que devuelve al luchador 1
   * @returns {Fighter} Luchador 1
   */
  public getFighter1(): fighter {
    return this.fighter1;
  }

  /**
   * Método que devuelve al luchador 2
   * @returns {Fighter} Luchador 2
   */
  public getFighter2(): fighter {
    return this.fighter2;
  }

  /**
   * Método que simula el combate entre dos luchadores y devuelve el ganador y una
   * cadena con la historia del combate
   * @returns [Fighter, string] Ganador y historia del combate
   */
  public fight(): [fighter, string] {
    let output: string = '';
    const damage1: number = this.fighter1.getDamage(this.fighter2);
    const damage2: number = this.fighter2.getDamage(this.fighter1);
    let hp1: number = this.fighter1.getHP();
    let hp2: number = this.fighter2.getHP();
    output += `--- ${this.fighter1.getName()} vs ${this.fighter2.getName()} ---\n`;
    output += `${this.fighter1.getName()} HP: ${hp1}\n`;
    output += `${this.fighter2.getName()} HP: ${hp2}\n`;
    output += `----------------------------------------------------------------\n`;
    while (true) {
      output += `--- Turno de ${this.fighter1.getName()} ---\n`;
      hp2 -= damage1;
      output += `${this.fighter1.getCatchingPhrase()}\n`;
      if (hp2 <= 0) {
        output += `${this.fighter1.getName()} ha ganado la pelea\n`;
        return [this.fighter1, output];
      }
      output += `${this.fighter1.getName()} HP: ${hp1}\n`;
      output += `${this.fighter2.getName()} HP: ${hp2}\n`;
      output += `----------------------------------------------------------------\n`;
      output += `--- Turno de ${this.fighter2.getName()} ---\n`;
      hp1 -= damage2;
      output += `${this.fighter2.getCatchingPhrase()}\n`;
      if (hp1 <= 0) {
        output += `${this.fighter2.getName()} ha ganado la pelea\n`;
        return [this.fighter2, output];
      }
      output += `${this.fighter1.getName()} HP: ${hp1}\n`;
      output += `${this.fighter2.getName()} HP: ${hp2}\n`;
      output += `----------------------------------------------------------------\n`;
    }
  }
}