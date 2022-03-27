import 'mocha';
import { expect } from 'chai';
import { SwordArtOnline } from '../../src/Ejercicio-01/SAO';
import { Saiyan } from '../../src/Ejercicio-01/Saiyan';

describe('SwordArtOnline', () => {
  let asuna: SwordArtOnline;
  let kazuto: SwordArtOnline;
  let sinon: SwordArtOnline;
  let goku: Saiyan;
  beforeEach(() => {
    asuna = new SwordArtOnline('Asuna', 70, 170, 300, 200, 1800, 'Sniper', 3, 'I am the one who knocks down the enemy.');
    kazuto = new SwordArtOnline('Kazuto', 80, 180, 400, 300, 2000, 'Swordsman', 3, 'I am the one who knocks down the enemy.', 'I got you!', 'You can\'t defeat me!');
    sinon = new SwordArtOnline('Sinon', 90, 190, 500, 400, 2200, 'Gunner', 3, 'I am the one who knocks down the enemy.', 'I got you!', 'You can\'t defeat me!');
    goku = new Saiyan('Goku', 84, 176, 470, 200, 2200, 4300, 9, 'Kamehameha!', 'Kakarot!', 'Power comes in response to a need, not a desire.');
  });
  it('should be a SwordArtOnline', () => {
    expect(asuna).to.be.an.instanceof(SwordArtOnline);
  });
  it('should be able to get the name', () => {
    expect(asuna.getName()).to.be.equal('Asuna');
  });
  it('should be able to get the weight', () => {
    expect(asuna.getWeight()).to.be.equal(70);
  });
  it('should be able to get the height', () => {
    expect(asuna.getHeight()).to.be.equal(170);
  });
  it('should be able to get the attack', () => {
    expect(asuna.getAttack()).to.be.equal(300);
  });
  it('should be able to get the defense', () => {
    expect(asuna.getDefense()).to.be.equal(200);
  });
  it('should be able to get the hp', () => {
    expect(asuna.getHP()).to.be.equal(1800);
  });
  it('should be able to get the playerType', () => {
    expect(asuna.getPlayerType()).to.be.equal('Sniper');
  });
  it('should be able to get the weaponLevel', () => {
    expect(asuna.getWeaponLevel()).to.be.equal(3);
  });
  it('should be able to get a catchPhrase', () => {
    expect(asuna.getCatchingPhrase()).to.be.equal('I am the one who knocks down the enemy.');
  });
  it('should be able to add a catchPhrase', () => {
    expect(() => asuna.addCatchingPhrase('I got you!')).to.not.throw();
  });
  it('should be able to get its damage against a fighter', () => {
    expect(asuna.getDamage(asuna)).to.be.equal(225);
    expect(asuna.getDamage(kazuto)).to.be.equal(150);
    expect(asuna.getDamage(sinon)).to.be.equal(112.5);
    expect(asuna.getDamage(goku)).to.be.equal(225);
    expect(kazuto.getDamage(asuna)).to.be.equal(180);
    expect(kazuto.getDamage(kazuto)).to.be.equal(120);
    expect(kazuto.getDamage(sinon)).to.be.equal(90);
    expect(kazuto.getDamage(goku)).to.be.equal(180);
    expect(sinon.getDamage(asuna)).to.be.equal(281.25);
    expect(sinon.getDamage(kazuto)).to.be.equal(187.5);
    expect(sinon.getDamage(sinon)).to.be.equal(140.625);
    expect(sinon.getDamage(goku)).to.be.equal(281.25);
  });
});