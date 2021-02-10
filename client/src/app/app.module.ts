import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {MatCard, MatCardModule} from "@angular/material/card";
import { FormsModule } from "@angular/forms";
import { ToastrModule } from 'ngx-toastr';

import { BooksService} from "./books/books.service";
import {NavBarComponent} from "./nav/navbar.component";
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import {AuthorsService} from "./authors/authors.service";
import { AuthorsComponent } from './authors/authors.component';
import { AuthorProfileComponent } from './authors/author-profile/author-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    NavBarComponent,
    BookDetailsComponent,
    AuthorsComponent,
    AuthorProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    BooksService,
    AuthorsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
