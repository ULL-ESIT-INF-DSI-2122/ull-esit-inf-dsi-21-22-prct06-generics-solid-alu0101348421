import { fighter } from './Fighter';

export class SwordArtOnline extends fighter {
  private playerType: 'Sniper' | 'Slayer' | 'Swordsman' |
    'Ninja' | 'Samurai' | 'Monk' | 'Gunner' | 'Berserker';
  private weaponLevel: number;

  constructor(name: string, weight: number, height: number,
      attack: number, defense: number, hp: number,
      playerType: 'Sniper' | 'Slayer' | 'Swordsman' |
        'Ninja' | 'Samurai' | 'Monk' | 'Gunner' | 'Berserker',
      weaponLevel: number, ...catchingPhrases: string[]) {
    super(name, weight, height, attack, defense, hp, ...catchingPhrases);
    this.playerType = playerType;
    this.weaponLevel = weaponLevel;
  }

  public getPlayerType(): 'Sniper' | 'Slayer' | 'Swordsman' |
    'Ninja' | 'Samurai' | 'Monk' | 'Gunner' | 'Berserker' {
    return this.playerType;
  }

  public getWeaponLevel(): number {
    return this.weaponLevel;
  }

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