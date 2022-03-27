import { fighter } from './Fighter';

export class Pokemon extends fighter {
  private velocity: number;
  private type: string;

  constructor(name: string, weight: number, height: number,
      attack: number, defense: number, hp: number,
      velocity: number, type: 'fuego' | 'agua' | 'hierba' |
      'electrico' | 'normal', ...catchingPhrases: string[]) {
    super(name, weight, height, attack, defense, hp, ...catchingPhrases);
    this.velocity = velocity;
    this.type = type;
  }

  public getVelocity(): number {
    return this.velocity;
  }

  public getType(): string {
    return this.type;
  }

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

  public getDamage(enemy: fighter): number {
    if (enemy instanceof Pokemon) {
      return 50 * (this.attack / enemy.getDefense()) *
          this.effectiveness(this.type, enemy.type);
    } else {
      return 50 * (this.attack / enemy.getDefense());
    }
  }
}