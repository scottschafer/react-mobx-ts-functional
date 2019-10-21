
import * as React from 'react';
import { Route } from 'react-router';
import TodoAppBar from './components/TodoAppBar';
import { RootStore } from '../../stores/rootStore';
// import { TodoListContainer } from './TodoListContainer';
import { Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { computed, autorun, observable } from 'mobx';
import { observer, useAsObservableSource } from 'mobx-react-lite';

// type TestInputParams = {
//   store: {
//     testValue: string;
//     setTestValue: (value: string) => void;
//   }
// }

// const TestInput = observer(({ store }: TestInputParams) => {
//   const { testValue, setTestValue } = store;

//   React.useEffect(() => {
//     console.log('TestInput was re-rendered');
//   });

//   return (
//     <input value={testValue} onChange={e => { setTestValue(e.target.value) }}></input>
//   )
// });


// const WrappedObserver = observer((props: any) => {
//   return <>
//     {props.children}
//   </>
// });

// todoListActions = {
//   to
// }

export const HomeContainer = observer(({ rootStore }: { rootStore: RootStore }) => {


  React.useEffect(() => {
    console.log('HomeContainer was re-rendered');
  });

  const { todoStore } = rootStore;

  // const todoListActions = {
  //   toggleTodoCompletion: (index: number) => {
  //     todoStore.toggleTodoCompletion(index);
  //   },
  //   setEditingId: (index: number) => {
  //     todoStore.setEditingId(index);
  //   }
  // };

  return (
    <>
      {/* <TodoAppBar></TodoAppBar> */}

      {/* <TestInput store={todoStore}></TestInput> */}
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
