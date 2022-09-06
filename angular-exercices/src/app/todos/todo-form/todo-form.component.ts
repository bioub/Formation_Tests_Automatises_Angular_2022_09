import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {

  @Output() onAddTodo = new EventEmitter<string>();
  todo: string;

  addTodo() {
    this.onAddTodo.emit(this.todo);
  }
}
