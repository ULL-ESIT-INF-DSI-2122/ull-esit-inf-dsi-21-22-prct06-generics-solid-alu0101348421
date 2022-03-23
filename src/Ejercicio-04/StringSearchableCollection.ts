import { SearchableCollection } from './SearchableCollection';

/**
 * StringSearchableCollection es una clase que define una colección de
 * cadenas que pueden ser buscadas.
 * @class StringSearchableCollection
 * @extends {SearchableCollection<string>}
 * @implements {Searchable<string>}
 * @implements {Collectable<string>}
 */
export class StringSearchableCollection <T extends string>
  extends SearchableCollection <T> {
  /**
   * Método que realiza una búsqueda en la colección y devuelve todos los
   * string que contengan la subcadena de búsqueda.
   * @param searchTerm Subcadena a buscar.
   * @returns {string[]} Elementos que coinciden con el término de búsqueda.
   */
  search(searchTerm: T): T[] | undefined {
    return this.items.filter((item) => item.includes(searchTerm));
  }
}