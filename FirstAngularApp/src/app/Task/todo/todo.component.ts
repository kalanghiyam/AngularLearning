import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasks = []

  constructor() { }

  ngOnInit() {
  }

  addTodo = function(something){
    this.tasks.push(something.value.todo)
    console.log(this.tasks)
    this.todo="";
  }

  taskCompleted = function(current){
    console.log(current)
    this.tasks.splice(current, 1);
  }
}
