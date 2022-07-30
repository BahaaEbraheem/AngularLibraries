import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
public custom:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://localhost:44362/api/Customers").subscribe(resp=>{
this.custom=resp;
    },err=>{
      console.log(err)
    })
  }

}
