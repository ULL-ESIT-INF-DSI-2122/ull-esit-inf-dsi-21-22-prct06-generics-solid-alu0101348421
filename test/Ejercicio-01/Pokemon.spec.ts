import 'mocha';
import { expect } from 'chai';
import { Pokemon } from '../../src/Ejercicio-01/Pokemon';
import { Saiyan } from '../../src/Ejercicio-01/Saiyan';

describe('Pokemon', () => {
  let pikachu: Pokemon;
  let squirtle: Pokemon;
  let bulbasaur: Pokemon;
  let charmander: Pokemon;
  let eevee: Pokemon;
  let goku: Saiyan;
  beforeEach(() => {
    pikachu = new Pokemon('Pikachu', 6, 30, 250, 100, 1000, 30, 'electrico', 'Pika Pika!', 'Pikachuuuu!', 'Pika-Pika!');
    squirtle = new Pokemon('Squirtle', 7, 35, 300, 100, 1200, 35, 'agua', 'I got you!', 'Squirtle!');
    charmander = new Pokemon('Charmander', 8, 40, 350, 100, 1400, 40, 'fuego', 'Charmander!', 'Charmander!', 'Charmander!');
    bulbasaur = new Pokemon('Bulbasaur', 9, 45, 400, 100, 1600, 45, 'hierba', 'Bulbasaur!', 'Bulbasaur!', 'Bulbasaur!');
    eevee = new Pokemon('Eevee', 10, 50, 450, 100, 1800, 50, 'normal', 'Eevee!', 'Eevee!', 'Eevee!');
    goku = new Saiyan('Goku', 84, 176, 470, 400, 2200, 4300, 9, 'Kamehameha!', 'Kakarot!', 'Power comes in response to a need, not a desire.');
  });
  it('should be a Pokemon', () => {
    expect(pikachu).to.be.an.instanceof(Pokemon);
  });
  it('should be able to get its name', () => {
    expect(pikachu.getName()).to.be.equal('Pikachu');
  });
  it('should be able to get its weight', () => {
    expect(pikachu.getWeight()).to.be.equal(6);
  });
  it('should be able to get its height', () => {
    expect(pikachu.getHeight()).to.be.equal(30);
  });
  it('should be able to get its attack', () => {
    expect(pikachu.getAttack()).to.be.equal(250);
  });
  it('should be able to get its defense', () => {
    expect(pikachu.getDefense()).to.be.equal(100);
  });
  it('should be able to get its hp', () => {
    expect(pikachu.getHP()).to.be.equal(1000);
  });
  it('should be able to get its velocity', () => {
    expect(pikachu.getVelocity()).to.be.equal(30);
  });
  it('should be able to get its type', () => {
    expect(pikachu.getType()).to.be.equal('electrico');
  });
  it('should be able to get its damage against a fighter', () => {
    expect(pikachu.getDamage(pikachu)).to.be.equal(62.5);
    expect(pikachu.getDamage(goku)).to.be.equal(31.25);
    expect(pikachu.getDamage(squirtle)).to.be.equal(250);
    expect(pikachu.getDamage(charmander)).to.be.equal(125);
    expect(pikachu.getDamage(bulbasaur)).to.be.equal(125);
    expect(pikachu.getDamage(eevee)).to.be.equal(125);
    expect(squirtle.getDamage(squirtle)).to.be.equal(75);
    expect(squirtle.getDamage(goku)).to.be.equal(37.5);
    expect(squirtle.getDamage(pikachu)).to.be.equal(75);
    expect(squirtle.getDamage(charmander)).to.be.equal(300);
    expect(squirtle.getDamage(bulbasaur)).to.be.equal(75);
    expect(squirtle.getDamage(eevee)).to.be.equal(150);
    expect(charmander.getDamage(charmander)).to.be.equal(87.5);
    expect(charmander.getDamage(goku)).to.be.equal(43.75);
    expect(charmander.getDamage(pikachu)).to.be.equal(175);
    expect(charmander.getDamage(squirtle)).to.be.equal(87.5);
    expect(charmander.getDamage(bulbasaur)).to.be.equal(350);
    expect(charmander.getDamage(eevee)).to.be.equal(175);
    expect(bulbasaur.getDamage(bulbasaur)).to.be.equal(100);
    expect(bulbasaur.getDamage(goku)).to.be.equal(50);
    expect(bulbasaur.getDamage(pikachu)).to.be.equal(200);
    expect(bulbasaur.getDamage(squirtle)).to.be.equal(400);
    expect(bulbasaur.getDamage(charmander)).to.be.equal(100);
    expect(bulbasaur.getDamage(eevee)).to.be.equal(400);
  });
});
