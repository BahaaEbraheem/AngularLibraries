import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { firstValueFrom, EMPTY, take, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) { }

  url: string = "https://localhost:44362/api/BookDetails/GetAllBooks";
  books!: Book[];
   GetAllBook(): void {
    this.http.get(this.url).toPromise().then(res=>{
this.books=res as Book[];
    })


}


}
