import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BooksService } from './books.service';
import { Books } from './books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  displayedColumns: string[] = ['title', 'genre', 'edit', 'delete'];
  dataSource = new MatTableDataSource<any>();

  selectedBook: Books = new Books();
  loading = false;

  constructor(public booksService: BooksService) { }

  ngOnInit(): void {
    this.refresh();
  }

  async refresh() {
    this.loading = true;
    const data = await this.booksService.getAllBooks();
    this.dataSource.data = data;
    this.loading = false;
  }

  async updateBook() {
    if (this.selectedBook.id !== undefined) {
      await this.booksService.updateBook(this.selectedBook);
    } else {
      await this.booksService.createBook(this.selectedBook);
    }
    this.selectedBook = new Books();
    await this.refresh();
  }

  editBook(book: Books) {
    this.selectedBook = book;
  }

  clearBook() {
    this.selectedBook = new Books();
  }

  async deleteBook(book: Books) {
    this.loading = true;
    if (confirm(`Are you sure you want to delete the book ${book.title}. This cannot be undone.`)) {
      if (book.id != null) {
        await this.booksService.deleteBook(book.id);
      }
    }
    await this.refresh();
  }

}
