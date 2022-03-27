export abstract class Audiovisual {
  private name: string;
  private author: string;
  private year: number;
  private genre: string;
  private description: string;
  constructor(name: string, author: string, year: number, genre: string, description: string) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.description = description;
  }
  public getName(): string {
    return this.name;
  }
  public getAuthor(): string {
    return this.author;
  }
  public getYear(): number {
    return this.year;
  }
  public getGenre(): string {
    return this.genre;
  }
  public getDescription(): string {
    return this.description;
  }
}

export class Documental extends Audiovisual {
  private duration: number;
  constructor(name: string, author: string, year: number, genre: string, description: string, duration: number) {
    super(name, author, year, genre, description);
    this.duration = duration;
  }
  public getDuration(): number {
    return this.duration;
  }
}
export class Film extends Audiovisual {
  private duration: number;
  private stars: number;
  constructor(name: string, author: string, year: number, genre: string, description: string, duration: number, stars: number) {
    super(name, author, year, genre, description);
    this.duration = duration;
    this.stars = stars;
  }
  public getDuration(): number {
    return this.duration;
  }
  public getStars(): number {
    return this.stars;
  }
}
export class Serie extends Audiovisual {
  private seasons: number;
  private episodes: number;
  constructor(name: string, author: string, year: number, genre: string, description: string, seasons: number, episodes: number) {
    super(name, author, year, genre, description);
    this.seasons = seasons;
    this.episodes = episodes;
  }
  public getSeasons(): number {
    return this.seasons;
  }
  public getEpisodes(): number {
    return this.episodes;
  }
}