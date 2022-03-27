import { Streamable } from './Streamable';

/**
 * Clase abstracta que representa una colección de contenido audiovisual
 * @class StreamableCollection
 * @attribute {T[]} items Colección de contenido audiovisual
 */
export abstract class BasicStreamableCollection <T> implements Streamable <T> {
  items: T[];

  /**
   * Constructor
   */
  constructor() {
    this.items = [];
  }

  /**
   * Método que añade un item a la colección
   * @param item {T} Item a añadir
   */
  public addItem(item: T): void {
    this.items.push(item);
  }

  /**
   * Método que devuelve todos los items de la colección
   * @returns {T[]} Colección de items
   */
  public getItems(): T[] {
    return this.items;
  }

  /**
   * Método que devuelve el item de la colección en la posición indicada
   * @param index {number} Posición del item a devolver
   * @returns {T} Item en la posición indicada
   */
  public getItem(index: number): T {
    return this.items[index];
  }

  /**
   * Método que elimina un item de la colección
   * @param index {number} Posición del item a eliminar
   */
  public removeItem(index: number): void {
    this.items.splice(index, 1);
  }

  /**
   * Método que devuelve el número de items de la colección
   * @returns {number} Número de items de la colección
   */
  public getNumberOfItems(): number {
    return this.items.length;
  }

  /**
   * Método que busca un item en la colección por su nombre
   * @param name {string} Nombre del item
   */
  public abstract searchByName(name: string): T[];

  /**
   * Método que busca un item en la colección por su año
   * @param year {number} Año del item
   */
  public abstract searchByYear(year: number): T[];

  /**
   * Método que busca un item en la colección por su género
   * @param genre {string} Género del item
   */
  public abstract searchByGenre(genre: string): T[];
}