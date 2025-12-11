import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo.model';

export interface TodoStats {
  total: number;
  completed: number;
  pending: number;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];
  @Input() filter: string = 'all';
  @Input() stats!: TodoStats;
  @Output() filterChange = new EventEmitter<string>();
  @Output() toggleTodo = new EventEmitter<number>();
  @Output() editTodo = new EventEmitter<Todo>();
  @Output() deleteTodo = new EventEmitter<number>();

  get filteredTodos(): Todo[] {
    return this.todos.filter(todo => {
      if (this.filter === 'completed') return todo.completed;
      if (this.filter === 'pending') return !todo.completed;
      return true;
    });
  }

  setFilter(filter: string): void {
    this.filter = filter;
    this.filterChange.emit(filter);
  }
}

