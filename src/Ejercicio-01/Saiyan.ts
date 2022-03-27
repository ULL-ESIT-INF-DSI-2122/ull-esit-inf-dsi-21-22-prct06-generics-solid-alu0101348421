import { fighter } from './Fighter';

export class Saiyan extends fighter {
  private power: number;
  private lvl: number;

  constructor(name: string, weight: number, height: number,
      attack: number, defense: number, hp: number,
      power: number, lvl: number, ...catchingPhrases: string[]) {
    super(name, weight, height, attack, defense, hp, ...catchingPhrases);
    this.power = power;
    this.lvl = lvl;
  }

  public getPower(): number {
    return this.power;
  }

  public getLvl(): number {
    return this.lvl;
  }

  public getDamage(enemy: fighter): number {
    return ((this.power / 10) * this.lvl * this.attack) / enemy.getDefense();
  }
}