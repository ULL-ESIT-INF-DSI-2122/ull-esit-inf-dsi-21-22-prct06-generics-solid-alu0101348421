import { SearchableCollection } from './SearchableCollection';

/**
 * NumericSearchableCollection es una clase que define una colección de
 * números que pueden ser buscados.
 * @class NumericSearchableCollection
 * @extends {SearchableCollection<number>}
 * @implements {Searchable<number>}
 * @implements {Collectable<number>}
 */
export class NumericSearchableCollection <T extends number>
  extends SearchableCollection <T> {
  /**
   * Método que realiza una búsqueda en la colección y devuelve todos los
   * elementos que coincidan con el término de búsqueda.
   * @param searchTerm Elemento a buscar.
   * @returns {number[]} Elementos que coinciden con el término de búsqueda.
   * @returns {undefined} Si no hay elementos que coincidan con el término de
   */
  search(searchTerm: T): T[] | undefined {
    return this.items.filter((item) => item === searchTerm);
  }
}