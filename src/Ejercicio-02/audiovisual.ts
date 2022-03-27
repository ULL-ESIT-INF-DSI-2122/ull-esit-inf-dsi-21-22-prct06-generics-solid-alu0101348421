/**
 * Clase abstracta que representa contenido audiovisual
 * @class Audiovisual
 * @attribute {string} name Nombre del contenido audiovisual
 * @attribute {string} author Autor del contenido audiovisual
 * @attribute {number} year Año de publicación del contenido audiovisual
 * @attribute {string} genre Género del contenido audiovisual
 * @attribute {string} description Descripción del contenido audiovisual
 */
export abstract class Audiovisual {
  private name: string;
  private author: string;
  private year: number;
  private genre: string;
  private description: string;

  /**
   * Constructor
   * @param name {string} Nombre del contenido audiovisual
   * @param author {string} Autor del contenido audiovisual
   * @param year {number} Año de publicación del contenido audiovisual
   * @param genre {string} Género del contenido audiovisual
   * @param description {string} Descripción del contenido audiovisual
   */
  constructor(name: string, author: string, year: number, genre: string, description: string) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.description = description;
  }

  /**
   * Método que devuelve el nombre del contenido audiovisual
   * @returns {string} Nombre del contenido audiovisual
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Método que devuelve el autor del contenido audiovisual
   * @returns {string} Nombre del autor del contenido audiovisual
   */
  public getAuthor(): string {
    return this.author;
  }

  /**
   * Método que devuelve el año de publicación del contenido audiovisual
   * @returns {number} Año de publicación del contenido audiovisual
   */
  public getYear(): number {
    return this.year;
  }

  /**
   * Método que devuelve el género del contenido audiovisual
   * @returns {string} Género del contenido audiovisual
   */
  public getGenre(): string {
    return this.genre;
  }

  /**
   * Método que devuelve la descripción del contenido audiovisual
   * @returns {string} Descripción del contenido audiovisual
   */
  public getDescription(): string {
    return this.description;
  }
}

/**
 * Clase que representa un documental
 * @class Documental
 * @extends Audiovisual
 * @attribute {number} duration Duración del documental
 */
export class Documental extends Audiovisual {
  private duration: number;

  /**
   * Constructor
   * @param name {string} Nombre del documental
   * @param author {string} Autor del documental
   * @param year {number} Año de publicación del documental
   * @param genre {string} Género del documental
   * @param description {string} Descripción del documental
   * @param duration {number} Duración del documental
   */
  constructor(name: string, author: string, year: number, genre: string, description: string, duration: number) {
    super(name, author, year, genre, description);
    this.duration = duration;
  }

  /**
   * Método que devuelve la duración del documental
   * @returns {number} Duración del documental
   */
  public getDuration(): number {
    return this.duration;
  }
}

/**
 * Clase que representa una película
 * @class Film
 * @extends Audiovisual
 * @attribute {number} duration Duración de la película
 * @attribute {number} stars Número de estrellas de la película
 */
export class Film extends Audiovisual {
  private duration: number;
  private stars: number;

  /**
   * Constructor
   * @param name {string} Nombre de la película
   * @param author {string} Autor de la película
   * @param year {number} Año de publicación de la película
   * @param genre {string} Género de la película
   * @param description {string} Descripción de la película
   * @param duration {number} Duración de la película
   * @param stars {number} Número de estrellas de la película
   */
  constructor(name: string, author: string, year: number, genre: string, description: string, duration: number, stars: number) {
    super(name, author, year, genre, description);
    this.duration = duration;
    this.stars = stars;
  }

  /**
   * Método que devuelve la duración de la película
   * @returns {number} Duración de la película
   */
  public getDuration(): number {
    return this.duration;
  }

  /**
   * Método que devuelve el número de estrellas de la película
   * @returns {number} Número de estrellas de la película
   */
  public getStars(): number {
    return this.stars;
  }
}

/**
 * Clase que representa una serie
 * @class Serie
 * @extends Audiovisual
 * @attribute {number} seasons Número de temporadas de la serie
 * @attribute {number} episodes Número de episodios de la serie
 */
export class Serie extends Audiovisual {
  private seasons: number;
  private episodes: number;

  /**
   * Constructor
   * @param name {string} Nombre de la serie
   * @param author {string} Autor de la serie
   * @param year {number} Año de publicación de la serie
   * @param genre {string} Género de la serie
   * @param description {string} Descripción de la serie
   * @param seasons {number} Número de temporadas de la serie
   * @param episodes {number} Número de episodios de la serie
   */
  constructor(name: string, author: string, year: number, genre: string, description: string, seasons: number, episodes: number) {
    super(name, author, year, genre, description);
    this.seasons = seasons;
    this.episodes = episodes;
  }

  /**
   * Método que devuelve el número de temporadas de la serie
   * @returns {number} Número de temporadas de la serie
   */
  public getSeasons(): number {
    return this.seasons;
  }

  /**
   * Método que devuelve el número de episodios de la serie
   * @returns {number} Número de episodios de la serie
   */
  public getEpisodes(): number {
    return this.episodes;
  }
}