import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  constructor(private router:Router,private jwthelper:JwtHelperService) { }

  IsUserAuthenticate() {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwthelper.isTokenExpired(token)){
      return true;
    }
    else{
      return false;
    }

  }
  logout() {
    localStorage.removeItem("jwt");
    this.router.navigateByUrl("/Login");
  }
  ngOnInit(): void {
  }

}
