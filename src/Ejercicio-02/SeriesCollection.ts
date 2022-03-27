import { BasicStreamableCollection } from './BasicStreamableCollection';
import { Serie } from './audiovisual';

/**
 * Clase que representa una colección de series
 * @class SeriesCollection
 * @extends BasicStreamableCollection
 */
export class SeriesCollection extends BasicStreamableCollection<Serie> {
  /**
   * Método que busca una serie en la colección por su nombre
   * @param name {string} Nombre de la serie
   * @returns {Serie[]} Colección de series
   */
  public searchByName(name: string): Serie[] {
    return this.items.filter((item) => item.getName() === name);
  }

  /**
   * Método que busca una serie en la colección por su año
   * @param year {number} Año de la serie
   * @returns {Serie[]} Colección de series
   */
  public searchByYear(year: number): Serie[] {
    return this.items.filter((item) => item.getYear() === year);
  }
  /**
   * Método que busca una serie en la colección por su género
   * @param genre {string} Género de la serie
   * @returns {Serie[]} Colección de series
   */
  public searchByGenre(genre: string): Serie[] {
    return this.items.filter((item) => item.getGenre() === genre);
  }
  /**
   * Método que busca una serie en la colección por su número de temporadas
   * @param seasons {number} Número de temporadas de la serie
   * @returns {Serie[]} Colección de series
   */
  public searchBySeasons(seasons: number): Serie[] {
    return this.items.filter((item) => item.getSeasons() === seasons);
  }

  /**
   * Método que busca una serie en la colección por su duración
   * @param episodes {number} Número de episodios de la serie
   * @returns {Serie[]} Colección de series
   */
  public searchByEpisodes(episodes: number): Serie[] {
    return this.items.filter((item) => item.getEpisodes() === episodes);
  }
}