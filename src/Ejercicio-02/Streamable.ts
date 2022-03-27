/**
 * Interfaz genérica para los objetos que sean una colección de items
 * @interface Collection
 */
export interface Collection <T> {
  items: T[];

  /**
   * Método para añadir un item a la colección
   * @param item {T} Item a añadir
   */
  addItem(item: T): void;

  /**
   * Método para obtener todos los items de la colección
   * @returns {T[]} Lista de items
   */
  getItems(): T[];

  /**
   * Método para obtener un item de la colección
   * @param index {number} Índice del item
   * @returns {T} Item
   */
  getItem(index: number): T;

  /**
   * Método para eliminar un item de la colección
   * @param index {number} Índice del item
   */
  removeItem(index: number): void;

  /**
   * Método para obtener el número de items de la colección
   * @returns {number} Número de items
   */
  getNumberOfItems(): number;
}

/**
 * Interfaz genérica para clases de elementos audiovisuales en las que se pueda buscar un item
 * @interface SearchableStream
 */
export interface SearchableStream <T> {

  /**
   * Método para buscar un item en la colección por su nombre
   * @param name {string} Nombre del item
   */
  searchByName(name: string): T[];

  /**
   * Método para buscar un item en la colección por su año
   * @param year {number} Año del item
   */
  searchByYear(year: number): T[];

  /**
   * Método para buscar un item en la colección por su género
   * @param genre {string} Género del item
   */
  searchByGenre(genre: string): T[];
}

/**
 * Interfaz genérica para clases de colecciones de items audiovisuales que se puedan buscar
 */
export interface Streamable <T> extends Collection <T>, SearchableStream <T> {}