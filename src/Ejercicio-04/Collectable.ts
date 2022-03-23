/**
 * Collectable es una interfaz que permite almacenar elementos de una colección.
 * @interface Collectable
 * @template T
 */
export interface Collectable <T> {
  /**
   * Permite añadir un elemento a la colección.
   * @param item Elemento a añadir.
   */
  addItem(item: T): void;
  /**
   * Permite obtener los elementos de la colección.
   * @returns {T[]} Elementos de la colección.
   */
  getItems(): T[];
  /**
   * Permite eliminar un elemento de la colección por su índice.
   * @param index Índice del elemento a eliminar.
   */
  removeItem(index: number): void;
  /**
   * Permite obtener el número de elementos de la colección.
   * @returns {number} Número de elementos de la colección.
   */
  getNumberOfItems(): number;
}