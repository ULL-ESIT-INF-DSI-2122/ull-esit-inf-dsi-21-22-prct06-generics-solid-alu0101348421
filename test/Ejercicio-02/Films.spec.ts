import 'mocha';
import { expect } from 'chai';
import { Film } from '../../src/Ejercicio-02/audiovisual';

describe('Film', () => {
  let film: Film;
  beforeEach(() => {
    film = new Film('Interstellar', 'Christopher Nolan', 2014, 'Ciencia ficción', 'Un viaje a través del tiempo.', 169, 8.6);
  });
  it('should be a Film', () => {
    expect(film).to.be.an.instanceof(Film);
  });
  it('should have a name', () => {
    expect(film.getName()).to.equal('Interstellar');
  });
  it('should have an author', () => {
    expect(film.getAuthor()).to.equal('Christopher Nolan');
  });
  it('should have a year', () => {
    expect(film.getYear()).to.equal(2014);
  });
  it('should have a genre', () => {
    expect(film.getGenre()).to.equal('Ciencia ficción');
  });
  it('should have a description', () => {
    expect(film.getDescription()).to.equal('Un viaje a través del tiempo.');
  });
  it('should have a duration', () => {
    expect(film.getDuration()).to.equal(169);
  });
  it('should have a stars', () => {
    expect(film.getStars()).to.equal(8.6);
  });
});