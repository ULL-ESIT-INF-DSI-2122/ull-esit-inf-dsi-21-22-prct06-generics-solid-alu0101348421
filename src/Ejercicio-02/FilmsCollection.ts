import { BasicStreamableCollection } from './BasicStreamableCollection';
import { Film } from './audiovisual';
export class FilmsCollection extends BasicStreamableCollection<Film> {
  public searchByName(name: string): Film[] {
    return this.items.filter((item) => item.getName() === name);
  }
  public searchByYear(year: number): Film[] {
    return this.items.filter((item) => item.getYear() === year);
  }
  public searchByGenre(genre: string): Film[] {
    return this.items.filter((item) => item.getGenre() === genre);
  }
  public searchByDuration(duration: number): Film[] {
    return this.items.filter((item) => item.getDuration() === duration);
  }
  public searchByStars(stars: number): Film[] {
    return this.items.filter((item) => item.getStars() === stars);
  }
}