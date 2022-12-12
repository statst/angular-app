import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message: string = 'Hello Welcome to Lineup'

  constructor() { }

  ngOnInit(): void {
    this.message = '5';
    console.log(this.message);
  }

}
