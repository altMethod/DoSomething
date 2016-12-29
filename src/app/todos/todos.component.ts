import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  todos: FirebaseListObservable<any[]>;
  newTodo: string = '';

  constructor(private af: AngularFire) {}

  ngOnInit() {
    this.todos = this.af.database.list('/');
  }
  
  add() {
    this.todos.push({todo: this.newTodo, checked: 0});
    this.newTodo = '';
  }

  delete(todo) {
    this.todos.remove(todo);
  }

  toggle(currentTodo) {
    if (currentTodo.checked == 1) {
      this.todos.update(currentTodo, {todo: currentTodo.todo, checked: 0})
    }
    else {
      this.todos.update(currentTodo, {todo: currentTodo.todo, checked: 1})
    }
  }

  setStyle(todo) {
    let styles = {
      'color': todo.checked == 0 ? '#000' : '#ddd',
      'text-decoration': todo.checked == 0 ? 'none' : 'line-through'
    };
    return styles;
  }

}