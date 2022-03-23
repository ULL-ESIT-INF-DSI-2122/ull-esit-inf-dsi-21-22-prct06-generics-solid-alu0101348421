import 'mocha';
import { expect } from 'chai';
import { StringSearchableCollection }
  from '../../src/Ejercicio-04/StringSearchableCollection';

describe('StringSearchableCollection', () => {
  let collection: StringSearchableCollection<string>;
  beforeEach(() => {
    collection = new StringSearchableCollection<string>();
    collection.addItem('hola');
    collection.addItem('mundo');
    collection.addItem('hola, que tal');
    collection.addItem('saturno es un planeta');
  });
  it('Debe tener un método addItem', () => {
    expect(collection.addItem).to.exist;
    expect(collection.addItem).to.be.a('function');
    expect(() => collection.addItem('hello')).not.to.throw;
  });
  it('Debe tener un método getItems', () => {
    expect(collection.getItems).to.exist;
    expect(collection.getItems).to.be.a('function');
    expect(collection.getItems()).to.be.an('array');
    expect(collection.getItems()).to.have.lengthOf(4);
  });
  it('Debe tener un método getNumberOfItems', () => {
    expect(collection.getNumberOfItems).to.exist;
    expect(collection.getNumberOfItems).to.be.a('function');
    expect(collection.getNumberOfItems()).to.be.equal(4);
  });
  it('Debe tener un método removeItem', () => {
    expect(collection.removeItem).to.exist;
    expect(collection.removeItem).to.be.a('function');
    expect(() => collection.removeItem(1)).not.to.throw;
    collection.removeItem(1);
    expect(collection.getNumberOfItems()).to.equal(3);
  });
  it('Debe tener un método search', () => {
    expect(collection.search).to.exist;
    expect(collection.search).to.be.a('function');
    expect(collection.search('ho')).to.be.an('array');
    expect(collection.search('hola')).to.have.lengthOf(2);
  });
});