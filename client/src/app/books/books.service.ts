import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { HttpResponse } from '@angular/common/http'
import { Books } from './books'
import {environment} from "../../environments/environment";

@Injectable()
export class BooksService {


  constructor(private http: HttpClient) {}

  private async request(method: string, url: string, data?: any) {
    console.log('request ' + JSON.stringify(data));
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
      headers: {}
    });
    return new Promise<any>((resolve, reject) => {
      result.subscribe(resolve as any, reject as any);
    });
  }

  getAllBooks() {
    return this.request('get', `${environment.apiUrl}/books`);
  }

  getBook(id: bigint) {
    return this.request('get', `${environment.apiUrl}/books/${id}`);
  }

  createBook(book: Books) {
    console.log('createBooks ' + JSON.stringify(book));
    return this.request('post', `${environment.apiUrl}/books`, book);
  }

  updateBook(book: Books) {
    console.log('updateBooks ' + JSON.stringify(book));
    return this.request('post', `${environment.apiUrl}/books/${book.id}`, book);
  }

  deleteBook(id: bigint) {
    return this.request('delete', `${environment.apiUrl}/books/${id}`);
  }
}
