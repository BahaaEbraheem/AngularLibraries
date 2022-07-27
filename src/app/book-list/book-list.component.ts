import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(public Myservice:BookService,private router:Router) { }

  ngOnInit(): void {
    this.Myservice.GetAllBooks();
  }
  logout(){
    localStorage.removeItem("jwt");
    this.router.navigateByUrl("");
  }
  FillData(item:Book){
    this.Myservice.book.Id=item.Id;
    this.Myservice.book.Title=item.Title;
    this.Myservice.book.AuthorName=item.AuthorName;
    this.Myservice.book.Price=item.Price;
    this.Myservice.book.TotalPages=item.TotalPages;
    this.Myservice.book.PublishedDate=item.PublishedDate;
    this.Myservice.book.Language=item.Language;
    this.Myservice.book.CreatedOn=item.CreatedOn;

  }
}
