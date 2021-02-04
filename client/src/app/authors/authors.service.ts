import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { HttpResponse } from '@angular/common/http'
import { Author } from './author'
import {environment} from "../../environments/environment";

@Injectable()
export class AuthorsService {


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

  async getAllAuthors():Promise<Author[]> {
    return await this.request('get', `${environment.apiUrl}/authors`);
  }

  getAuthor(id: bigint) {
    return this.request('get', `${environment.apiUrl}/authors/${id}`);
  }

  createAuthor(author: Author) {
    console.log('createAuthors ' + JSON.stringify(author));
    return this.request('post', `${environment.apiUrl}/authors`, author);
  }

  updateAuthor(author: Author) {
    console.log('updateAuthors ' + JSON.stringify(author));
    return this.request('post', `${environment.apiUrl}/authors/${author.id}`, author);
  }

  deleteAuthor(id: bigint) {
    return this.request('delete', `${environment.apiUrl}/authors/${id}`);
  }
}
