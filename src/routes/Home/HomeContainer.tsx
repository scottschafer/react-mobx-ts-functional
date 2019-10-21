
import * as React from 'react';
import TodoAppBar from './components/TodoAppBar';
import { RootStore } from '../../stores/rootStore';
import TodoList from './components/TodoList';
import { observer } from 'mobx-react-lite';


export const HomeContainer = observer(({ rootStore }: { rootStore: RootStore }) => {

  React.useEffect(() => {
    console.log('HomeContainer was re-rendered');
  });

  const { todoStore } = rootStore;

  return (
    <>
      <input value={todoStore.testValue} onChange={e => { todoStore.setTestValue(e.target.value) }}></input>

      <TodoAppBar
        remaining={todoStore.remainingTodos}
        total={todoStore.todos.length}
      ></TodoAppBar>

      <TodoList
        todos={todoStore.todos}
        todoToAdd={todoStore.todoToAdd}
        setTodoToAdd={todoStore.setTodoToAdd}
        toggleTodoCompletion={todoStore.toggleTodoCompletion}
        setEditingId={todoStore.setEditingId}
      />

    </>
  );
})
