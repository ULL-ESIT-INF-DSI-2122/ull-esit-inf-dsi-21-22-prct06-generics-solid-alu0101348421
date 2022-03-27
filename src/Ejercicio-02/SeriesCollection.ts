import { BasicStreamableCollection } from './BasicStreamableCollection';
import { Serie } from './audiovisual';
export class SeriesCollection extends BasicStreamableCollection<Serie> {
  public searchByName(name: string): Serie[] {
    return this.items.filter((item) => item.getName() === name);
  }
  public searchByYear(year: number): Serie[] {
    return this.items.filter((item) => item.getYear() === year);
  }
  public searchByGenre(genre: string): Serie[] {
    return this.items.filter((item) => item.getGenre() === genre);
  }
  public searchBySeasons(seasons: number): Serie[] {
    return this.items.filter((item) => item.getSeasons() === seasons);
  }
  public searchByEpisodes(episodes: number): Serie[] {
    return this.items.filter((item) => item.getEpisodes() === episodes);
  }
}