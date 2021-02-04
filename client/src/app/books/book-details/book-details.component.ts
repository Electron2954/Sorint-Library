import { Component, OnInit } from '@angular/core';
import {BooksService} from "../books.service";
import {ActivatedRoute} from "@angular/router";
import {Book} from "../book";

@Component({
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book = new Book();

  constructor(public booksService: BooksService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.load(this.route.snapshot.params['id']);
  }

  async load(id: bigint) {
    this.book = await this.booksService.getBook(id);
  }

}
