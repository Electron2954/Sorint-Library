import { Component, OnInit } from '@angular/core';
import {BooksService} from "../books.service";
import {ActivatedRoute} from "@angular/router";
import {Books} from "../books";

@Component({
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book = new Books();

  constructor(public booksService: BooksService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.load(this.route.snapshot.params['id']);
  }

  async load(id: bigint) {
    this.book = await this.booksService.getBook(id);
  }

}
