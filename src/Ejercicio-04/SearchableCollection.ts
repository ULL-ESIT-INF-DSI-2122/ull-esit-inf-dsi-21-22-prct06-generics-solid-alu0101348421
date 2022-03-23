import { Collectable } from './Collectable';
import { Searchable } from './Searchable';

/**
 * SearchableCollection es una clase abstracta que define una colección de
 * elementos que pueden ser buscados.
 * @abstract
 * @class SearchableCollection
 * @implements {Collectable}
 * @implements {Searchable}
 */
export abstract class SearchableCollection <T> implements Collectable<T>,
    Searchable<T> {
  protected items: T[] = [];

  /**
   * Añade un item de tipo T a la colección.
   * @param item Item a añadir.
   */
  addItem(item: T): void {
    this.items.push(item);
  }

  /**
   * Devuelve los elementos de la colección.
   * @returns {T[]} Elementos de la colección.
   */
  getItems(): T[] {
    return this.items;
  }

  /**
   * Elimina un elemento de la colección por su índice.
   * @param index Índice del elemento a eliminar.
   */
  removeItem(index: number): void {
    this.items.splice(index, 1);
  }

  /**
   * Devuelve el número de elementos de la colección.
   * @returns {number} Número de elementos de la colección.
   */
  getNumberOfItems(): number {
    return this.items.length;
  }

  /**
   * Método abstracto que realiza una búsqueda en la colección.
   * @param searchTerm Elemento a buscar.
   * @returns {T[]} Elementos que coinciden con el término de búsqueda.
   * @returns {undefined} Si no hay elementos que coincidan con el término de
   * búsqueda.
   */
  abstract search(searchTerm: T): T[] | undefined;
}
