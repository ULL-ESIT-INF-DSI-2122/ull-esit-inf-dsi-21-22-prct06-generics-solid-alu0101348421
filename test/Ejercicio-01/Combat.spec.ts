import 'chai';
import { expect } from 'chai';
import { Combat } from '../../src/Ejercicio-01/Combat';
import { fighter } from '../../src/Ejercicio-01/Fighter';
import { Pokemon } from '../../src/Ejercicio-01/Pokemon';
import { Saiyan } from '../../src/Ejercicio-01/Saiyan';
import { SwordArtOnline } from '../../src/Ejercicio-01/SAO';

describe('Combat', () => {
  let combat: Combat;
  let goku: Saiyan;
  let vegeta: Saiyan;
  let asuna: SwordArtOnline;
  let sino: SwordArtOnline;
  let pikachu: Pokemon;
  let charmander: Pokemon;
  beforeEach(() => {
    combat = new Combat(goku, vegeta);
    goku = new Saiyan('Goku', 84, 176, 470, 200, 2200, 4300, 9, 'Kamehameha!');
    asuna = new SwordArtOnline('Asuna', 70, 170, 300, 200, 1800, 'Sniper', 3, 'I am the one who knocks down the enemy.', 'I got you!', 'You can\'t defeat me!');
    pikachu = new Pokemon('Pikachu', 6, 30, 200, 100, 1000, 30, 'electrico', 'Pika Pika!', 'Pikachuuuu!', 'Pika-Pika!');
    charmander = new Pokemon('Charmander', 6, 30, 200, 100, 1000, 30, 'fuego', 'Char Char!', 'Char-Char!', 'Char-Char!');
    vegeta = new Saiyan('Vegeta', 80, 180, 500, 200, 2000, 4000, 10, 'Kamehameha!', 'Kakarot!', 'Power comes in response to a need, not a desire.');
    sino = new SwordArtOnline('Sino', 70, 170, 300, 200, 1800, 'Sniper', 3, 'I am the one who knocks down the enemy.', 'I got you!', 'You can\'t defeat me!');
  });
  it('should be a Combat', () => {
    expect(combat).to.be.an.instanceof(Combat);
  });
  it('Should be able to return the fighter 1', () => {
    expect(combat.getFighter1()).to.be.eql(goku);
  });
  it('Should be able to return the fighter 2', () => {
    expect(combat.getFighter2()).to.be.eql(vegeta);
  });
  it('Should be able to simulate a fight with rwo saiyans', () => {
    let result: [fighter, string] = combat.fight();
    expect(result[0]).to.be.eql(goku);
    expect(result[1]).to.be.a('string');
  });
  it('Should be able to simulate a fight with two SAO player', () => {
    combat = new Combat(asuna, sino);
    let result: [fighter, string] = combat.fight();
    expect(result[0]).to.be.eql(asuna);
    expect(result[1]).to.be.a('string');
  });
  it('Should be able to simulate a fight with two Pokemon', () => {
    combat = new Combat(pikachu, charmander);
    let result: [fighter, string] = combat.fight();
    expect(result[0]).to.be.eql(pikachu);
    expect(result[1]).to.be.a('string');
  });
  it('Should be able to simulate a fight with a Pokemon and a SAO player', () => {
    combat = new Combat(pikachu, sino);
    let result: [fighter, string] = combat.fight();
    expect(result[0]).to.be.eql(sino);
    expect(result[1]).to.be.a('string');
  });
  it('Should be able to simulate a fight with a Pokemon and a saiyan', () => {
    combat = new Combat(pikachu, goku);
    let result: [fighter, string] = combat.fight();
    expect(result[0]).to.be.eql(goku);
    expect(result[1]).to.be.a('string');
  });
  it('Should be able to simulate a fight with a saiyan and a SAO player', () => {
    combat = new Combat(goku, sino);
    let result: [fighter, string] = combat.fight();
    expect(result[0]).to.be.eql(goku);
    expect(result[1]).to.be.a('string');
  });
  it('Should be able to simulate a fight with a saiyan and a Pokemon', () => {
    combat = new Combat(goku, pikachu);
    let result: [fighter, string] = combat.fight();
    expect(result[0]).to.be.eql(goku);
    expect(result[1]).to.be.a('string');
  });
  it('Should be able to simulate a fight with a SAO player and a Pokemon', () => {
    combat = new Combat(sino, pikachu);
    let result: [fighter, string] = combat.fight();
    expect(result[0]).to.be.eql(sino);
    expect(result[1]).to.be.a('string');
  });
  it('Should be able to simulate a fight with a SAO player and a saiyan', () => {
    combat = new Combat(sino, goku);
    let result: [fighter, string] = combat.fight();
    expect(result[0]).to.be.eql(goku);
    expect(result[1]).to.be.a('string');
  });
  it('Some catchphrase should be returned', () => {
    expect(combat.fight()[1]).to.be.a('string');
    expect(combat.fight()[1].includes('Kamehameha!')).to.be.true;
  });
});