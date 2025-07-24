import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: string = "Minhas tarefas";
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });
  }

  add(){
    const title = this.form.controls['title'].value;
    const idProximoItem = this.todos.length + 1;

    this.todos.push(new Todo(idProximoItem, title, false));
    this.clearForm();
  }

  addMook(){
    this.todos.push(new Todo(1, "Cortar o cabelo", false));    
    this.todos.push(new Todo(2, "Passear com cachorro", false));
    this.todos.push(new Todo(3, "Ir ao supermercado", true));
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

  clearForm(){
    this.form.reset();
  }

  reloadScreen(){
    window.location.reload();
  }
}
