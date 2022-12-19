import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  // username: string;
  // password: string;
  // router: any;
  // invalidLogin: boolean;

  constructor() { }

  authenticate(username: string, password: string){
    // console.log('before' + this.isUserLoggedIn());
    if(username === "xyz" && password==="dummy"){
      sessionStorage.setItem('authenticateUser', username );
      // console.log('after' + this.isUserLoggedIn());
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }
}
