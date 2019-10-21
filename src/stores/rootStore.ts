import { TodoStore } from './todoStore';

export class RootStore {
  readonly todoStore = new TodoStore(this);
};