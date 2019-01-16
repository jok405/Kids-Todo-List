import { Injectable } from '@angular/core';
import { Tasks } from '../tasks/tasks';

@Injectable()
export class TasksDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId = 0;

    // Placeholder for todo's
    todos: Tasks[] = [];

  constructor() { }

  // Simulate POST /todos
  addTodo(todo: Tasks): TasksDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): TasksDataService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}):  Tasks | any {
    const todo = this.getTodoById(id) ;
    if (!todo) {
      return this;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): Tasks[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number):  Tasks | any {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Simulate GET /todos/:category
  getTodoByCategory(id: number): Tasks[] {
    return this.todos
      .filter(todo => todo.category === id);
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Tasks) {
    const updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}