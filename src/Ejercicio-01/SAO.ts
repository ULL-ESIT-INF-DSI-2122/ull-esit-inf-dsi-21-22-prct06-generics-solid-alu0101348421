import { fighter } from './Fighter';

/**
 * Clase que representa a un jugador de Sword Art Online
 * @class SwordArtOnline
 * @attribute {string} name Nombre del jugador
 * @attribute {number} weight Peso del jugador
 * @attribute {number} height Altura del jugador
 * @attribute {number} attack Ataque del jugador
 * @attribute {number} defense Defensa del jugador
 * @attribute {number} hp Health Points del jugador
 * @attribute {'Sniper' | 'Slayer' | 'Swordsman' | 'Ninja' | 'Samurai' | 'Monk' | 'Gunner' | 'Berserker'} playerType Tipo de jugador
 * @attribute {number} weaponLevel Nivel de arma del jugador
 */
export class SwordArtOnline extends fighter {
  private playerType: 'Sniper' | 'Slayer' | 'Swordsman' |
    'Ninja' | 'Samurai' | 'Monk' | 'Gunner' | 'Berserker';
  private weaponLevel: number;

  /**
   * Constructor
   * @param name {string} Nombre del jugador
   * @param weight {number} Peso del jugador
   * @param height {number} Altura del jugador
   * @param attack {number} Ataque del jugador
   * @param defense {number} Defensa del jugador
   * @param hp {number} Health Points del jugador
   * @param playerType {'Sniper' | 'Slayer' | 'Swordsman' | 'Ninja' | 'Samurai' | 'Monk' | 'Gunner' | 'Berserker'} Tipo de jugador
   * @param weaponLevel {number} Nivel de arma del jugador
   * @param catchingPhrases {string[]} Frases que usa el jugador
   */
  constructor(name: string, weight: number, height: number,
      attack: number, defense: number, hp: number,
      playerType: 'Sniper' | 'Slayer' | 'Swordsman' |
        'Ninja' | 'Samurai' | 'Monk' | 'Gunner' | 'Berserker',
      weaponLevel: number, ...catchingPhrases: string[]) {
    super(name, weight, height, attack, defense, hp, ...catchingPhrases);
    this.playerType = playerType;
    this.weaponLevel = weaponLevel;
  }

  /**
   * Método que devuelve el tipo de jugador
   * @returns {'Sniper' | 'Slayer' | 'Swordsman' | 'Ninja' | 'Samurai' | 'Monk' | 'Gunner' | 'Berserker'} Tipo de jugador
   */
  public getPlayerType(): 'Sniper' | 'Slayer' | 'Swordsman' |
    'Ninja' | 'Samurai' | 'Monk' | 'Gunner' | 'Berserker' {
    return this.playerType;
  }

  /**
   * Método que devuelve el nivel de arma del jugador
   * @returns {number} Nivel de arma del jugador
   */
  public getWeaponLevel(): number {
    return this.weaponLevel;
  }

  /**
   * Método que devuelve el daño de un ataque
   * @param enemy {fighter} Enemigo contra el que se ataca
   * @returns {number} Daño del ataque
   */
  public getDamage(enemy: fighter): number {
    let attack: number = this.attack / 2;
    if (this.playerType === 'Sniper' || this.playerType === 'Slayer') {
      attack *= 2;
    }
    if (this.playerType === 'Swordsman' || this.playerType === 'Ninja' ||
        this.playerType === 'Samurai' || this.playerType === 'Monk') {
      attack *= 1.2;
    }
    if (this.playerType === 'Gunner' || this.playerType === 'Berserker') {
      attack *= 1.5;
    }
    return 50 * attack * this.weaponLevel / enemy.getDefense();
  }
}