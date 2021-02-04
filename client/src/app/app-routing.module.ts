import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {BooksComponent} from "./books/books.component";
import {BookDetailsComponent} from "./books/book-details/book-details.component";
import {AuthorsComponent} from "./authors/authors.component";
import {AuthorProfileComponent} from "./authors/author-profile/author-profile.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'books/:id',
    component: BookDetailsComponent
  },
  {
    path: 'authors',
    component: AuthorsComponent
  },
  {
    path: 'authors/:id',
    component: AuthorProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
