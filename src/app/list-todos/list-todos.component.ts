import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {id:1, description: 'Excercise'},
    {id:2, description: 'Learn Java'},
    {id:3, description: 'go for a walk'},
  ]

  todo = {
    id: 1,
    description: 'finish assignment'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
