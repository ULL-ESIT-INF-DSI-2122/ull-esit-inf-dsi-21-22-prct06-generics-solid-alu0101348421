import 'mocha';
import { expect } from 'chai';
import { Film } from '../../src/Ejercicio-02/audiovisual';
import { FilmsCollection } from '../../src/Ejercicio-02/FilmsCollection';

describe('FilmsCollection', () => {
  let filmsCollection: FilmsCollection;
  beforeEach(() => {
    filmsCollection = new FilmsCollection();
    filmsCollection.addItem(new Film('Interstellar', 'Christopher Nolan', 2014, 'Ciencia ficción', 'Una historia de una familia que viaja al espacio en busca de una forma de sobrevivir a la extinción de la Tierra.', 169, 8.6));
    filmsCollection.addItem(new Film('El padrino', 'Francis Ford Coppola', 1972, 'Drama', 'Un joven emigrante se enfrenta a una banda de narcotraficantes que pretende robarle la vida a su padre.', 175, 9.0));
    filmsCollection.addItem(new Film('Titanic', 'James Cameron', 1997, 'Drama', 'Una joven embarcada en un barco sobrevive a un accidente que la hace inmóvil durante mucho tiempo.', 194, 7.7));
  });
  it('should be a FilmsCollection', () => {
    expect(filmsCollection).to.be.an.instanceof(FilmsCollection);
  });
  it('should be able to add items', () => {
    filmsCollection.addItem(new Film('El padrino', 'Francis Ford Coppola', 1972, 'Drama', 'Un joven emigrante se enfrenta a una banda de narcotraficantes que pretende robarle la vida a su padre.', 175, 9.0));
    expect(filmsCollection.getItems().length).to.equal(4);
  });
  it('should be able get items', () => {
    expect(filmsCollection.getItems().length).to.equal(3);
  });
  it('should be able to get items by index', () => {
    expect(filmsCollection.getItem(0).getName()).to.equal('Interstellar');
  });
  it('should be able to remove items', () => {
    filmsCollection.removeItem(0);
    expect(filmsCollection.getItems().length).to.equal(2);
  });
  it('should be able to get number of items', () => {
    expect(filmsCollection.getNumberOfItems()).to.equal(3);
  });
  it('should be able to search by name', () => {
    expect(filmsCollection.searchByName('Interstellar')[0].getName()).to.equal('Interstellar');
  });
  it('should be able to search by year', () => {
    expect(filmsCollection.searchByYear(2014)[0].getName()).to.equal('Interstellar');
  });
  it('should be able to search by genre', () => {
    expect(filmsCollection.searchByGenre('Drama')[0].getName()).to.equal('El padrino');
  });
  it('should be able to search by duration', () => {
    expect(filmsCollection.searchByDuration(169)[0].getName()).to.equal('Interstellar');
  });
  it('should be able to search by stars', () => {
    expect(filmsCollection.searchByStars(8.6)[0].getName()).to.equal('Interstellar');
  });
});
