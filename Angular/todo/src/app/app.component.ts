import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: string = "Minhas tarefas";

  constructor() {
    this.todos.push(new Todo(1, "Cortar o cabelo", false));    
    this.todos.push(new Todo(2, "Passear com cachorro", false));
    this.todos.push(new Todo(3, "Ir ao supermercado", true));
  }

  reloadScreen(){
    window.location.reload();
  }

  remove(todo: Todo){
    let index = this.todos.indexOf(todo);
    if (index != 1)
      this.todos.splice(index, 1);
  }

  markAsDone(todo: Todo){
    todo.done = true;
  }

  markAsUndone(todo: Todo){
    todo.done = false;
  }

}
