import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent  {
  books!: Book[];
  book: Book = new Book;
  constructor(public Myservice: BookService, private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.Myservice.GetAllBooks();

  }

  
  FillData(item: Book) {
    this.Myservice.book.Id = item.Id;
    this.Myservice.book.Title = item.Title;
    this.Myservice.book.AuthorName = item.AuthorName;
    this.Myservice.book.Price = item.Price;
    this.Myservice.book.TotalPages = item.TotalPages;
    this.Myservice.book.PublishedDate = item.PublishedDate;
    this.Myservice.book.Language = item.Language;
    this.Myservice.book.CreatedOn = item.CreatedOn;
 
  }
 
}
