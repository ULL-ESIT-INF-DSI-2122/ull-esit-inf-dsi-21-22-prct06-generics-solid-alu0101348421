import { BasicStreamableCollection } from './BasicStreamableCollection';
import { Documental } from './audiovisual';

/**
 * Clase que representa una colección de documentales
 * @class DocumentalsCollection
 * @extends BasicStreamableCollection
 */
export class DocumentalsCollection extends BasicStreamableCollection<Documental> {
  /**
   * Método que busca un documental en la colección por su nombre
   * @param name {string} Nombre del documental
   * @returns {Documental[]} Colección de documentales
   */
  public searchByName(name: string): Documental[] {
    return this.items.filter((item) => item.getName() === name);
  }

  /**
   * Método que busca un documental en la colección por su año
   * @param year {number} Año del documental
   * @returns {Documental[]} Colección de documentales
   */
  public searchByYear(year: number): Documental[] {
    return this.items.filter((item) => item.getYear() === year);
  }

  /**
   * Método que busca un documental en la colección por su género
   * @param genre {string} Género del documental
   * @returns {Documental[]} Colección de documentales
   */
  public searchByGenre(genre: string): Documental[] {
    return this.items.filter((item) => item.getGenre() === genre);
  }

  /**
   * Método que busca un documental en la colección por su duración
   * @param duration {number} Duración del documental
   * @returns {Documental[]} Colección de documentales
   */
  public searchByDuration(duration: number): Documental[] {
    return this.items.filter((item) => item.getDuration() === duration);
  }
}