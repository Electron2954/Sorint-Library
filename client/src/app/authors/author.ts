export class Author {
  id?: bigint
  name: string;
  surname: string;
  birth_date: string;
  createdAt: string;
  updatedAt: string;

  constructor() {
    this.name = '';
    this.surname = '';
    this.birth_date = '';
    this.createdAt = '';
    this.updatedAt = '';
  }
}
