import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  url: string = 'https://localhost:44362/api/Auth/login';

invalidlogin:boolean | undefined;
  constructor(public Myservice:LoginService,private router:Router,private http: HttpClient) { }
Login(form:NgForm){
const credintials={
  'UserName':form.value.UserName,
  'Password':form.value.Password,
}
this.http.post(this.url, credintials).subscribe(response=>{
  const token=(<any>response).token;
  localStorage.setItem("jwt",token);
  this.invalidlogin=false;
  this.router.navigateByUrl('');
  
}
,err=>{
  this.invalidlogin=true;
})     
}
  ngOnInit(): void {
  }

}
