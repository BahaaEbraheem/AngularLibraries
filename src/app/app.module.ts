import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBookComponent } from './add-book/add-book.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DeleteBookComponent } from './delete-book/delete-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AddBookComponent,
    DeleteBookComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
