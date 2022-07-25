import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';





@Injectable({
  providedIn: 'root'
})
export class LoginService {
 Credential: any;
  url: string = 'https://localhost:44362/api/Auth/login';



  constructor(private http: HttpClient) { }



}
