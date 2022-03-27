export interface Collection <T> {
  items: T[];
  addItem(item: T): void;
  getItems(): T[];
  getItem(index: number): T;
  removeItem(index: number): void;
  getNumberOfItems(): number;
}

export interface SearchableStream <T> {
  searchByName(name: string): T[];
  searchByYear(year: number): T[];
  searchByGenre(genre: string): T[];
}

export interface Streamable <T> extends Collection <T>, SearchableStream <T> {}