import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
 

  constructor(public Myservice:BookService) { }
  ngOnInit() {
   this.Myservice.book={
     Id:0,
     Title:'',
     AuthorName:'',
     TotalPages:0,
IsDeleted:false,
Language:'',
Price:0
   }
  }
  
  submit(from: NgForm) :void{
    if (this.Myservice.book.Id==0) {
      this.Myservice.AddBook().subscribe(res=>{
        this.Myservice.GetAllBooks();
            }
              ,err=>{
        console.log(err);
              }
              );
    }
    else{
      this.Myservice.UpdateBook().subscribe(res=>{
        this.Myservice.GetAllBooks();
            }
              ,err=>{
        console.log(err);
              }
              );
    }
  
    
  }
  
}
