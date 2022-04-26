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
   
  }
  submit(from: NgForm){
    this.Myservice.AddBook().subscribe(res=>{
this.Myservice.GetAllBook();
    }
      ,err=>{
console.log(err);
      }
      );
    
  }
  
}
