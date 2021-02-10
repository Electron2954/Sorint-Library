import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BooksService } from './books.service';
import { Book } from './book';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  displayedColumns: string[] = ['title', 'genre', 'edit', 'delete'];
  dataSource = new MatTableDataSource<any>();

  selectedBook: Book = new Book();
  loading = false;

  constructor(
    public booksService: BooksService,
    private toastr: ToastrService) { }

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
      this.toastr.success('Book Updated');
    } else {
      await this.booksService.createBook(this.selectedBook);
      this.toastr.success('Book Created');
    }
    this.selectedBook = new Book();
    await this.refresh();
  }

  editBook(book: Book) {
    this.selectedBook = book;
  }

  clearBook() {
    this.selectedBook = new Book();
  }

  async deleteBook(book: Book) {
    this.loading = true;
    if (confirm(`Are you sure you want to delete the book ${book.title}. This cannot be undone.`)) {
      if (book.id != null) {
        await this.booksService.deleteBook(book.id);
        this.toastr.success('Book Deleted');
      }
    }
    await this.refresh();
  }

}
