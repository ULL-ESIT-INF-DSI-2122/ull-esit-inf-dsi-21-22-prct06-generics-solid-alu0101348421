import 'mocha';
import { expect } from 'chai';
import { NumericSearchableCollection }
  from '../../src/Ejercicio-04/NumericSearchableCollection';

describe('NumericSearchableCollection', () => {
  let collection: NumericSearchableCollection<number>;
  beforeEach(() => {
    collection = new NumericSearchableCollection<number>();
    collection.addItem(1);
    collection.addItem(2);
    collection.addItem(3);
    collection.addItem(1);
    collection.addItem(1);
  });
  it('Debe tener un método addItem', () => {
    expect(collection.addItem).to.exist;
    expect(collection.addItem).to.be.a('function');
    expect(() => collection.addItem(1)).not.to.throw;
  });
  it('Debe tener un método getItems', () => {
    expect(collection.getItems).to.exist;
    expect(collection.getItems).to.be.a('function');
    expect(collection.getItems()).to.be.an('array');
    expect(collection.getItems()).to.have.lengthOf(5);
  });
  it('Debe tener un método getNumberOfItems', () => {
    expect(collection.getNumberOfItems).to.exist;
    expect(collection.getNumberOfItems).to.be.a('function');
    expect(collection.getNumberOfItems()).to.be.equal(5);
  });
  it('Debe tener un método removeItem', () => {
    expect(collection.removeItem).to.exist;
    expect(collection.removeItem).to.be.a('function');
    expect(() => collection.removeItem(1)).not.to.throw;
    collection.removeItem(1);
    expect(collection.getNumberOfItems()).to.equal(4);
  });
  it('Debe tener un método search', () => {
    expect(collection.search).to.exist;
    expect(collection.search).to.be.a('function');
    expect(collection.search(1)).to.be.an('array');
    expect(collection.search(1)).to.have.lengthOf(3);
  });
});