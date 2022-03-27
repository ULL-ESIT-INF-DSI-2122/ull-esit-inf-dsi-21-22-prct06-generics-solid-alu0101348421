import { BasicStreamableCollection } from './BasicStreamableCollection';
import { Documental } from './audiovisual';

export class DocumentalsCollection extends BasicStreamableCollection<Documental> {
  public searchByName(name: string): Documental[] {
    return this.items.filter((item) => item.getName() === name);
  }
  public searchByYear(year: number): Documental[] {
    return this.items.filter((item) => item.getYear() === year);
  }
  public searchByGenre(genre: string): Documental[] {
    return this.items.filter((item) => item.getGenre() === genre);
  }
  public searchByDuration(duration: number): Documental[] {
    return this.items.filter((item) => item.getDuration() === duration);
  }
}