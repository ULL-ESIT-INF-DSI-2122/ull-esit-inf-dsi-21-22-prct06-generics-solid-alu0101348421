import 'mocha';
import { expect } from 'chai';
import { Serie } from '../../src/Ejercicio-02/audiovisual';
import { SeriesCollection } from '../../src/Ejercicio-02/SeriesCollection';

describe('SeriesCollection', () => {
  let seriesCollection: SeriesCollection;
  beforeEach(() => {
    seriesCollection = new SeriesCollection();
    seriesCollection.addItem(new Serie('The Simpsons', 'Matt', 1989, 'Animación', 'sátira de la sociedad estadounidense que narra la vida y el día a día de una familia de clase media de ese país', 33, 721));
    seriesCollection.addItem(new Serie('The Walking Dead', 'Robert Kirkman', 2010, 'Horror', 'La serie presenta un gran elenco como sobrevivientes de un apocalipsis zombi, tratando de mantenerse con vida bajo la amenaza casi constante de ataques de los zombis sin conciencia', 11, 166));
  });
  it('should be a SeriesCollection', () => {
    expect(seriesCollection).to.be.an.instanceof(SeriesCollection);
  });
  it('should be able to add items', () => {
    seriesCollection.addItem(new Serie('The Walking Dead', 'Robert Kirkman', 2010, 'Horror', 'La serie presenta un gran elenco como sobrevivientes de un apocalipsis zombi, tratando de mantenerse con vida bajo la amenaza casi constante de ataques de los zombis sin conciencia', 11, 166));
    expect(seriesCollection.getItems().length).to.equal(3);
  });
  it('should be able get items', () => {
    expect(seriesCollection.getItems().length).to.equal(2);
  });
  it('should be able to get items by index', () => {
    expect(seriesCollection.getItem(0).getName()).to.equal('The Simpsons');
  });
  it('should be able to remove items', () => {
    seriesCollection.removeItem(0);
    expect(seriesCollection.getItems().length).to.equal(1);
  });
  it('should be able to get number of items', () => {
    expect(seriesCollection.getNumberOfItems()).to.equal(2);
  });
  it('should be able to search by name', () => {
    expect(seriesCollection.searchByName('The Simpsons')[0].getName()).to.equal('The Simpsons');
  });
  it('should be able to search by year', () => {
    expect(seriesCollection.searchByYear(1989)[0].getName()).to.equal('The Simpsons');
  });
  it('should be able to search by genre', () => {
    expect(seriesCollection.searchByGenre('Animación')[0].getName()).to.equal('The Simpsons');
  });
  it('should be able to search by seasons', () => {
    expect(seriesCollection.searchBySeasons(33)[0].getName()).to.equal('The Simpsons');
  });
  it('should be able to search by episodes', () => {
    expect(seriesCollection.searchByEpisodes(721)[0].getName()).to.equal('The Simpsons');
  });
});