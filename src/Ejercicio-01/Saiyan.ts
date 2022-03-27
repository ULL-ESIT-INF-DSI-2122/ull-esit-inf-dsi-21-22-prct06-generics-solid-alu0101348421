import { fighter } from './Fighter';

/**
 * Clase que representa a un Saiyan
 * @class Saiyan
 * @attribute {string} name Nombre del luchador
 * @attribute {number} weight Peso del luchador
 * @attribute {number} height Altura del luchador
 * @attribute {number} attack Ataque del luchador
 * @attribute {number} defense Defensa del luchador
 * @attribute {number} hp Health Points del luchador
 * @attribute {number} power Poder del luchador
 * @attribute {number} lvl Nivel del luchador
 * @attribute {string[]} catchingPhrases Frases que usa el luchador
 */
export class Saiyan extends fighter {
  private power: number;
  private lvl: number;

  /**
   * Constructor
   * @param name {string} Nombre del luchador
   * @param weight {number} Peso del luchador
   * @param height {number} Altura del luchador
   * @param attack {number} Ataque del luchador
   * @param defense {number} Defensa del luchador
   * @param hp {number} Health Points del luchador
   * @param power {number} Poder del luchador
   * @param lvl {number} Nivel del luchador
   * @param catchingPhrases {string[]} Frases que usa el luchador
   */
  constructor(name: string, weight: number, height: number,
      attack: number, defense: number, hp: number,
      power: number, lvl: number, ...catchingPhrases: string[]) {
    super(name, weight, height, attack, defense, hp, ...catchingPhrases);
    this.power = power;
    this.lvl = lvl;
  }

  /**
   * Método que devuelve el poder del luchador
   * @returns {number} Poder del luchador
   */
  public getPower(): number {
    return this.power;
  }

  /**
   * Método que devuelve el nivel del luchador
   * @returns {number} Nivel del luchador
   */
  public getLvl(): number {
    return this.lvl;
  }

  /**
   * Método que devuelve el daño de un ataque
   * @param enemy {fighter} Enemigo contra el que se ataca
   * @returns {number} Daño del ataque
   */
  public getDamage(enemy: fighter): number {
    return ((this.power / 10) * this.lvl * this.attack) / enemy.getDefense();
  }
}