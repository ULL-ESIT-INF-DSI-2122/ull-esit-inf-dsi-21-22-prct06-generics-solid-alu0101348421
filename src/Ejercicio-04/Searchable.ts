/**
 * Searchable es una interfaz que permite que los elementos de una clase
 * puedan ser buscados.
 * @interface Searchable
 * @template T
 */
export interface Searchable <T> {
  /**
   * Realiza una búsqueda en la colección.
   * @param searchTerm Elemento a buscar.
   */
  search(searchTerm: T): T[] | undefined;
}