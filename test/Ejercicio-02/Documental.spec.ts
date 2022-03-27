import 'mocha';
import { expect } from 'chai';
import { Documental } from '../../src/Ejercicio-02/audiovisual';

describe('Documental', () => {
  let documental: Documental;
  beforeEach(() => {
    documental = new Documental('Atomic Homefront', 'Rebeca Cammisa', 2017, 'Documental de terror', 'Un documental de terror que explica la realidad de una familia de terroristas.', 60);
  });
  it('should be a Documental', () => {
    expect(documental).to.be.an.instanceof(Documental);
  });
  it('should have a name', () => {
    expect(documental.getName()).to.equal('Atomic Homefront');
  });
  it('should have an author', () => {
    expect(documental.getAuthor()).to.equal('Rebeca Cammisa');
  });
  it('should have a year', () => {
    expect(documental.getYear()).to.equal(2017);
  });
  it('should have a genre', () => {
    expect(documental.getGenre()).to.equal('Documental de terror');
  });
  it('should have a description', () => {
    expect(documental.getDescription()).to.equal('Un documental de terror que explica la realidad de una familia de terroristas.');
  });
  it('should have a duration', () => {
    expect(documental.getDuration()).to.equal(60);
  });
});