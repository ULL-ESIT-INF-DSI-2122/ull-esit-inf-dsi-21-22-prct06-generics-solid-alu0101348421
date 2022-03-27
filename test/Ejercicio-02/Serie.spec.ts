import 'mocha';
import { expect } from 'chai';
import { Serie } from '../../src/Ejercicio-02/audiovisual';

describe('Serie', () => {
  let serie: Serie;
  beforeEach(() => {
    serie = new Serie('The Big Bang Theory', 'Chuck Lorre', 2007, 'Comedia', 'Una serie de comedia sobre científicos y sus amigos.', 12, 279);
  });
  it('should be a Serie', () => {
    expect(serie).to.be.an.instanceof(Serie);
  });
  it('should have a name', () => {
    expect(serie.getName()).to.equal('The Big Bang Theory');
  });
  it('should have an author', () => {
    expect(serie.getAuthor()).to.equal('Chuck Lorre');
  });
  it('should have a year', () => {
    expect(serie.getYear()).to.equal(2007);
  });
  it('should have a genre', () => {
    expect(serie.getGenre()).to.equal('Comedia');
  });
  it('should have a description', () => {
    expect(serie.getDescription()).to.equal('Una serie de comedia sobre científicos y sus amigos.');
  });
  it('should have a seasons', () => {
    expect(serie.getSeasons()).to.equal(12);
  });
  it('should have a episodes', () => {
    expect(serie.getEpisodes()).to.equal(279);
  });
});