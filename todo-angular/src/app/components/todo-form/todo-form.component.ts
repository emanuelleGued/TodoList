import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  @Input() loading = false;
  @Output() addTodo = new EventEmitter<Todo>();

  todo: Todo = {
    title: '',
    description: '',
    completed: false
  };

  onSubmit(): void {
    if (this.todo.title.trim()) {
      this.addTodo.emit({ ...this.todo });
      this.todo = {
        title: '',
        description: '',
        completed: false
      };
    }
  }
}

