import 'mocha';
import { expect } from 'chai';
import { Saiyan } from '../../src/Ejercicio-01/Saiyan';

describe('Saiyan', () => {
  let goku: Saiyan;
  beforeEach(() => {
    goku = new Saiyan('Goku', 84, 176, 470, 400, 2200, 2700, 4, 'Kamehameha!', 'Kakarot!', 'Power comes in response to a need, not a desire.');
  });
  it('should be a Saiyan', () => {
    expect(goku).to.be.an.instanceof(Saiyan);
  });
  it('should be able to get its name', () => {
    expect(goku.getName()).to.be.equal('Goku');
  });
  it('should be able to get its weight', () => {
    expect(goku.getWeight()).to.be.equal(84);
  });
  it('should be able to get its height', () => {
    expect(goku.getHeight()).to.be.equal(176);
  });
  it('should be able to get its attack', () => {
    expect(goku.getAttack()).to.be.equal(470);
  });
  it('should be able to get its defense', () => {
    expect(goku.getDefense()).to.be.equal(400);
  });
  it('should be able to get its hp', () => {
    expect(goku.getHP()).to.be.equal(2200);
  });
  it('should be able to get its power', () => {
    expect(goku.getPower()).to.be.equal(2700);
  });
  it('should be able to get its level', () => {
    expect(goku.getLvl()).to.be.equal(4);
  });
  it('should be able to get its damage against a fighter', () => {
    expect(goku.getDamage(goku)).to.be.equal(1269);
  });
});