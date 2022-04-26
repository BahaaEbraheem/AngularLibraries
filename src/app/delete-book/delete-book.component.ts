import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  constructor(public Myservice:BookService) { }
  ngOnInit() {
   
  }
  submit(from: NgForm){
    this.Myservice.DeleteBook().subscribe(res=>{
this.Myservice.GetAllBook();
    }
      ,err=>{
console.log(err);
      }
      );
    
  }

}
