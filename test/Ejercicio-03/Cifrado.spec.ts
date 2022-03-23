import 'mocha';
import { expect } from 'chai';
import { Cifrado } from '../../src/Ejercicio-03/Cifrado';

describe('Cifrado', () => {
  it('Debería ser una clase', () => {
    expect(Cifrado).to.be.a('function');
  });
  it('Debería tener un constructor', () => {
    expect(Cifrado.prototype.constructor).to.be.a('function');
  });
  it('Debería tener un método cifrar', () => {
    expect(Cifrado.prototype.cifrar).to.be.a('function');
  });
  it('Debería cifrar correctamente', () => {
    const cifrado = new Cifrado('hola', 'abc');
    expect(cifrado.cifrar()).to.equal('hpna');
  });
  it('No debería cifrar los caracteres que no estén en el alfabeto', () => {
    const cifrado = new Cifrado('hola mundo', 'abc');
    expect(cifrado.cifrar()).to.equal('hpna ouofo');
  });
  it('Debería tener un método descifrar', () => {
    expect(Cifrado.prototype.descifrar).to.be.a('function');
  });
  it('Debería descifrar correctamente', () => {
    const cifrado = new Cifrado('hpna', 'abc');
    expect(cifrado.descifrar()).to.equal('hola');
  });
  it('No debería descifrar los caracteres que no estén en el alfabeto', () => {
    const cifrado = new Cifrado('hpna ouofo', 'abc');
    expect(cifrado.descifrar()).to.equal('hola mundo');
  });
});