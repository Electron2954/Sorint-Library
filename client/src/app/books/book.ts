export class Book {
  id?: bigint;
  title: string;
  genre: string;
  createdAt: string;
  updatedAt: string;

  constructor() {
    this.title = '';
    this.genre = '';
    this.createdAt = '';
    this.updatedAt = '';
  }
}
