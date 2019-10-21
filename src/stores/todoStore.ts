import { observable, action, computed } from 'mobx';
import { Todo } from '../models/Todo';
import { RootStore } from './rootStore';

export class TodoStore {
  readonly todos = observable<Todo>([]);
  @observable todoToAdd: string = '';
  @observable editingId: number | null = null;

  @observable testValue: string = 'this is a test';

  constructor(public readonly rootStore: RootStore) {
    this.setTodos([
      { id: 1, text: 'Buy eggs', completed: true },
      { id: 2, text: 'Write a post', completed: false }
    ]);
  }

  @action.bound setTestValue(value: string) {
    this.testValue = value;
  }

  @action.bound toggleTodoCompletion(id: number) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  @action.bound setTodos(value: Array<Todo>) {
    this.todos.replace(value);
  }

  @action.bound setTodoToAdd(value: string) {
    this.todoToAdd = value;
  }

  @computed get remainingTodos(): number {
    return this.todos.filter((t: Todo) => !t.completed).length
  }

  @computed get totalTodos(): number {
    return this.todos.filter((t: Todo) => !t.completed).length
  }

  @action.bound setEditingId(id: number | null) {
    this.editingId = id;
  }
}

// export const todoStore = new TodoStore();