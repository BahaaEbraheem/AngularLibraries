import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router:Router) { }
  IsUserAuthenticate() {
    const token = localStorage.getItem("jwt");
    if (token){
      // this.router.navigateByUrl('/booklist');
      return true;
    }
    else{
      // this.router.navigateByUrl('/Login')
      return false;
    }

  }

  ngOnInit(): void {
  }

}
