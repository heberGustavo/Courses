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
  private KEY_LOCAL_STORAGE = "todos";
  
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

    this.getDataLocalStorage()
  }

  add(){
    const title = this.form.controls['title'].value;
    const idProximoItem = this.todos.length + 1;

    this.todos.push(new Todo(idProximoItem, title, false));
    this.save();
    this.clearForm();
  }

  addMook(){
    this.todos.push(new Todo(1, "Cortar o cabelo", false));    
    this.todos.push(new Todo(2, "Passear com cachorro", false));
    this.todos.push(new Todo(3, "Ir ao supermercado", true));
  }

  save(){
    const dadosToJson = JSON.stringify(this.todos);
    localStorage.setItem(this.KEY_LOCAL_STORAGE, dadosToJson);
  }

  getDataLocalStorage(){
    const data = localStorage.getItem(this.KEY_LOCAL_STORAGE);
    this.todos = data ? JSON.parse(data) : null;
  }

  remove(todo: Todo){
    let index = this.todos.indexOf(todo);
    if (index != 1){
      this.todos.splice(index, 1);
      this.save();
    }
  }

  markAsDone(todo: Todo){
    todo.done = true;
    this.save();
  }

  markAsUndone(todo: Todo){
    todo.done = false;
    this.save();
  }

  clearForm(){
    this.form.reset();
  }

  reloadScreen(){
    window.location.reload();
  }
}
