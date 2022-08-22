import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class AuthService{
  isLoggedIn = false;
  login(){
    this.isLoggedIn= true;
  }
  logout(){
    this.isLoggedIn= false;
  }

  isAutheticated(){
    return this.isLoggedIn;
  }
}