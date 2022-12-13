import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "xyz";
  password = "";

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin(){
    console.log(this.username);
  }

}
