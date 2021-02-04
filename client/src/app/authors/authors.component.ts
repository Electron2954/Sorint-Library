import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AuthorsService } from './authors.service';
import { Author } from './author';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'surname', 'birth_date', 'edit', 'delete'];
  dataSource = new MatTableDataSource<any>();

  selectedAuthor: Author = new Author();
  loading = false;

  constructor( public authorsService: AuthorsService) { }

  ngOnInit(): void {
    this.refresh()
  }

  async refresh() {
    this.loading = true;
    const data = await this.authorsService.getAllAuthors();
    this.dataSource.data = data;
    this.loading = false;
  }

  async updateAuthor() {
    if (this.selectedAuthor.id !== undefined) {
      await this.authorsService.updateAuthor(this.selectedAuthor);
    } else {
      await this.authorsService.createAuthor(this.selectedAuthor);
    }
    this.selectedAuthor = new Author();
    await this.refresh();
  }

  editAuthor(author: Author) {
    this.selectedAuthor = author;
  }

  clearAuthor() {
    this.selectedAuthor = new Author();
  }

  async deleteAuthor(author: Author) {
    this.loading = true;
    if (confirm(`Are you sure you want to delete the author ${author.name} ${author.surname}. This cannot be undone.`)) {
      if (author.id != null) {
        await this.authorsService.deleteAuthor(author.id);
      }
    }
    debugger;
    await this.refresh();
  }

}
