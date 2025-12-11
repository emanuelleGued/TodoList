import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';

interface TodoStats {
  total: number;
  completed: number;
  pending: number;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  loading = false;
  error: string | null = null;
  filter = 'all';
  editingTodo: Todo | null = null;
  showEditModal = false;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos(): void {
    this.loading = true;
    this.error = null;
    this.todoService.getAllTodos().subscribe({
      next: (data) => {
        this.todos = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erro ao carregar tarefas';
        console.error(err);
        this.loading = false;
      }
    });
  }

  handleAddTodo(todo: Todo): void {
    this.loading = true;
    this.todoService.createTodo(todo).subscribe({
      next: (data) => {
        this.todos = [data, ...this.todos];
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erro ao criar tarefa';
        console.error(err);
        this.loading = false;
      }
    });
  }

  handleToggleTodo(id: number): void {
    this.todoService.toggleTodoCompletion(id).subscribe({
      next: (data) => {
        this.todos = this.todos.map(todo =>
          todo.id === id ? data : todo
        );
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  handleEditTodo(todo: Todo): void {
    this.editingTodo = { ...todo };
    this.showEditModal = true;
  }

  handleSaveEdit(): void {
    if (this.editingTodo && this.editingTodo.id) {
      this.todoService.updateTodo(this.editingTodo.id, this.editingTodo).subscribe({
        next: (data) => {
          this.todos = this.todos.map(todo =>
            todo.id === this.editingTodo!.id ? data : todo
          );
          this.closeEditModal();
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  }

  handleDeleteTodo(id: number): void {
    if (!confirm('Tem certeza que deseja excluir esta tarefa?')) return;

    this.todoService.deleteTodo(id).subscribe({
      next: () => {
        this.todos = this.todos.filter(todo => todo.id !== id);
      },
      error: (err) => {
        this.error = 'Erro ao excluir tarefa';
        console.error(err);
      }
    });
  }

  closeEditModal(): void {
    this.showEditModal = false;
    this.editingTodo = null;
  }

  onFilterChange(filter: string): void {
    this.filter = filter;
  }

  get stats(): TodoStats {
    return {
      total: this.todos.length,
      completed: this.todos.filter(todo => todo.completed).length,
      pending: this.todos.filter(todo => !todo.completed).length
    };
  }
}

