import { BasicStreamableCollection } from './BasicStreamableCollection';
import { Film } from './audiovisual';

/**
 * Clase que representa una colección de películas
 * @class FilmsCollection
 * @extends BasicStreamableCollection
 */
export class FilmsCollection extends BasicStreamableCollection<Film> {
  /**
   * Método que busca una película en la colección por su nombre
   * @param name {string} Nombre de la película
   * @returns {Film[]} Colección de películas
   */
  public searchByName(name: string): Film[] {
    return this.items.filter((item) => item.getName() === name);
  }

  /**
   * Método que busca una película en la colección por su año
   * @param year {number} Año de la película
   * @returns {Film[]} Colección de películas
   */
  public searchByYear(year: number): Film[] {
    return this.items.filter((item) => item.getYear() === year);
  }

  /**
   * Método que busca una película en la colección por su género
   * @param genre {string} Género de la película
   * @returns {Film[]} Colección de películas
   */
  public searchByGenre(genre: string): Film[] {
    return this.items.filter((item) => item.getGenre() === genre);
  }

  /**
   * Método que busca una película en la colección por su duración
   * @param duration {number} Duración de la película
   * @returns {Film[]} Colección de películas
   */
  public searchByDuration(duration: number): Film[] {
    return this.items.filter((item) => item.getDuration() === duration);
  }

  /**
   * Método que busca una película en la colección por su número de estrellas
   * @param stars {number} Número de estrellas
   * @returns {Film[]} Colección de películas
   */
  public searchByStars(stars: number): Film[] {
    return this.items.filter((item) => item.getStars() === stars);
  }
}