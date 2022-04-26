import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})


export class BookService {
  
  constructor(private http: HttpClient) { }

urlAdd:string="https://localhost:44362/api/BookDetails/AddBook";
  url: string = "https://localhost:44362/api/BookDetails/GetAllBooks";
  urlDel: string = "https://localhost:44362/api/BookDetails/DeleteBook";
  books!: Book[];
  book: Book = new Book;

   GetAllBook() {
    this.http.get(this.url).subscribe(res=>{
    this.books=res as Book[];
    })}
      public AddBook() {
        return this.http.post(this.urlAdd ,this. book);
    }
    DeleteBook(){
      return this.http.delete(this.urlDel+'?' +"title="+this.book.Title+'&'+"authorName="+this.book.AuthorName);
    }

}
