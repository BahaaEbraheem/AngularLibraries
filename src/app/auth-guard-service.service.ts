import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService  implements CanActivate {
  constructor(private router:Router) { }
  canActivate(){
    const token=localStorage.getItem("jwt");
    if(token){
      return true;
    }else{
      this.router.navigateByUrl('/Login')
      return false;
    }
  }


 
}
