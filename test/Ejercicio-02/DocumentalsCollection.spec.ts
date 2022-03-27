import 'mocha';
import { expect } from 'chai';
import { Documental } from '../../src/Ejercicio-02/audiovisual';
import { DocumentalsCollection } from '../../src/Ejercicio-02/DocumentalsCollection';

describe('DocumentalsCollection', () => {
  let documentalsCollection: DocumentalsCollection;
  beforeEach(() => {
    documentalsCollection = new DocumentalsCollection();
    documentalsCollection.addItem(new Documental('Atomic Homefront', 'Rebeca Cammisa', 2017, 'Documental de terror', 'Un documental de terror que explica la realidad de una familia de terroristas.', 60));
    documentalsCollection.addItem(new Documental('Apuntes para una película de atracos', 'Pablo León Siminiani', 2018, 'Documental de atracos', 'Un documental de atracos que homenajea al cine de atracadores.', 60));
    documentalsCollection.addItem(new Documental('El código de la muerte', 'Pablo León Siminiani', 2018, 'Documental de terror', 'Un documental de terror que explica la realidad de una familia de terroristas.', 60));
  });
  it('should be a DocumentalsCollection', () => {
    expect(documentalsCollection).to.be.an.instanceof(DocumentalsCollection);
  });
  it('should be able to add items', () => {
    documentalsCollection.addItem(new Documental('Food INC.', 'Robert Kenner', 2008, 'Industria', 'La transformación en una industria en la que la carne, la agricultura y nuestros hábitos de consumo se convierten en una apisonadora planetaria divide los tres segmentos de este durísimo documental', 60));
    expect(documentalsCollection.getItems().length).to.equal(4);
  });
  it('should be able get items', () => {
    expect(documentalsCollection.getItems().length).to.equal(3);
  });
  it('should be able to get items by index', () => {
    expect(documentalsCollection.getItem(0).getName()).to.equal('Atomic Homefront');
  });
  it('should be able to remove items', () => {
    documentalsCollection.removeItem(0);
    expect(documentalsCollection.getItems().length).to.equal(2);
  });
  it('should be able to get number of items', () => {
    expect(documentalsCollection.getNumberOfItems()).to.equal(3);
  });
  it('should be able to search by name', () => {
    expect(documentalsCollection.searchByName('Atomic Homefront')[0].getName()).to.equal('Atomic Homefront');
  });
  it('should be able to search by year', () => {
    expect(documentalsCollection.searchByYear(2018)[0].getName()).to.equal('Apuntes para una película de atracos');
  });
  it('should be able to search by genre', () => {
    expect(documentalsCollection.searchByGenre('Documental de terror')[0].getName()).to.equal('Atomic Homefront');
  });
  it('should be able to search by duration', () => {
    expect(documentalsCollection.searchByDuration(60)[0].getName()).to.equal('Atomic Homefront');
  });
});