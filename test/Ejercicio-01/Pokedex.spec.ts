import 'mocha';
import { expect } from 'chai';
import { Pokedex } from '../../src/Ejercicio-01/Pokedex';
import { Pokemon } from '../../src/Ejercicio-01/Pokemon';
import { Saiyan } from '../../src/Ejercicio-01/Saiyan';
import { SwordArtOnline } from '../../src/Ejercicio-01/SAO';

describe('Pokedex', () => {
  let pokedex: Pokedex;
  let goku: Saiyan;
  let vegeta: Saiyan;
  let asuna: SwordArtOnline;
  let sino: SwordArtOnline;
  let pikachu: Pokemon;
  beforeEach(() => {
    pokedex = new Pokedex();
    goku = new Saiyan('Goku', 84, 176, 470, 200, 2200, 4300, 9, 'Kamehameha!', 'Kakarot!', 'Power comes in response to a need, not a desire.');
    asuna = new SwordArtOnline('Asuna', 70, 170, 300, 200, 1800, 'Sniper', 3, 'I am the one who knocks down the enemy.', 'I got you!', 'You can\'t defeat me!');
    pikachu = new Pokemon('Pikachu', 6, 30, 200, 100, 1000, 30, 'electrico', 'Pika Pika!', 'Pikachuuuu!', 'Pika-Pika!');
    vegeta = new Saiyan('Vegeta', 80, 180, 500, 200, 2000, 4000, 10, 'Kamehameha!', 'Kakarot!', 'Power comes in response to a need, not a desire.');
    sino = new SwordArtOnline('Sino', 70, 170, 300, 200, 1800, 'Sniper', 3, 'I am the one who knocks down the enemy.', 'I got you!', 'You can\'t defeat me!');
    pokedex.addFighter(goku);
    pokedex.addFighter(asuna);
    pokedex.addFighter(pikachu);
  });
  it('should be a Pokedex', () => {
    expect(pokedex).to.be.an.instanceof(Pokedex);
  });
  it('should be able to add a fighter', () => {
    pokedex.addFighter(vegeta);
    pokedex.addFighter(sino);
    expect(pokedex.getAllFighters().length).to.be.equal(5);
  });
  it('should be able to get a fighter by his name', () => {
    expect(pokedex.getFighter('Goku')).to.be.an.instanceof(Saiyan);
    expect(pokedex.getFighter('Asuna')).to.be.an.instanceof(SwordArtOnline);
    expect(pokedex.getFighter('Pikachu')).to.be.an.instanceof(Pokemon);
  });
  it('Should return undefined if the fighter is not found', () => {
    expect(pokedex.getFighter('Pika')).to.be.undefined;
  });
  it('should be able to get all fighters', () => {
    expect(pokedex.getAllFighters().length).to.be.equal(3);
  });
});