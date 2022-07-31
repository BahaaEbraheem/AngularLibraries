import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})


export class BookService {

  constructor(private http: HttpClient) { }

  url: string = "https://localhost:44362/api/BookDetails/";
  book:Book=new Book
  books!: Book[];

    GetAllBooks() {
      return  this.http.get(this.url +"GetAllBooks").subscribe(res => {
    this.books = res as Book[];
  })
  }
  public AddBook() {
    return this.http.post(this.url+"AddBook", this.book);
  }
  DeleteBook() {
    return this.http.delete(this.url+"DeleteBook" + '?' + "title=" + this.book.Title + '&' + "authorName=" + this.book.AuthorName);
  }
  UpdateBook() {
    return this.http.put(this.url + this.book.Id, this.book);
  }
}
