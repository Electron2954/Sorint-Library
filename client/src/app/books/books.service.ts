import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { HttpResponse } from '@angular/common/http'
import { Books } from './books'

const baseUrl = 'http://sorint-library.matuszewskiszymon.pl:8000/api/v1';

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
    return this.request('get', `${baseUrl}/books`);
  }

  getBook(id: string) {
    return this.request('get', `${baseUrl}/books/${id}`);
  }

  createBook(book: Books) {
    console.log('createBooks ' + JSON.stringify(book));
    return this.request('post', `${baseUrl}/books`, book);
  }

  updateBook(book: Books) {
    console.log('updateBooks ' + JSON.stringify(book));
    return this.request('post', `${baseUrl}/books/${book.id}`, book);
  }

  deleteBook(id: bigint) {
    return this.request('delete', `${baseUrl}/books/${id}`);
  }

  // // get("/api/contacts")
  // getAllBooks(): Promise<void | Books[]> {
  //   return this.http.get(this.baseUrl)
  //     .toPromise()
  //     .then(response => response as Books[])
  //     .catch(this.handleError);
  // }
  //
  //
  // private handleError (error: any) {
  //   let errMsg = (error.message) ? error.message :
  //     error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  //   console.error(errMsg); // log to console instead
  // }
  //
  // getAllBooks(): Observable<Books[]> {
  //   return this.http.get<Books[]>(`${baseUrl}`)
  // }
  //
  // getBook(title: string): Observable<Books> {
  //   return this.http.get<Books>(`${baseUrl}/${title}`)
  // }
  //
  // insertBook(book: Books): Observable<Books> {
  //   return this.http.post<Books>(`${baseUrl}`, book)
  // }
  //
  // updateBook(book: Books): Observable<void> {
  //   return this.http.put<void>(
  //     `${baseUrl}/${book.title}`,
  //     book
  //   )
  // }
  //
  // deleteBook(id: bigint) {
  //   return this.http.delete(`${baseUrl}/api/v1/books/${id}`)
  // }
}
