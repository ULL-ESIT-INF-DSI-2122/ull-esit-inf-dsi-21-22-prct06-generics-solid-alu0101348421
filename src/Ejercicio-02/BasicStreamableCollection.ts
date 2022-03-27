import { Streamable } from './Streamable';

export abstract class BasicStreamableCollection <T> implements Streamable <T> {
  items: T[];
  constructor() {
    this.items = [];
  }
  public addItem(item: T): void {
    this.items.push(item);
  }
  public getItems(): T[] {
    return this.items;
  }
  public getItem(index: number): T {
    return this.items[index];
  }
  public removeItem(index: number): void {
    this.items.splice(index, 1);
  }
  public getNumberOfItems(): number {
    return this.items.length;
  }
  public abstract searchByName(name: string): T[];
  public abstract searchByYear(year: number): T[];
  public abstract searchByGenre(genre: string): T[];
}