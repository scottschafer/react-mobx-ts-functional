// import React from 'react'
// import ReactDOM from 'react-dom'
// import { observer } from 'mobx-react-lite'
// import Paper from '@material-ui/core/Paper';

// // import { todoStore } from './stores/todoStore';

// import TodoList from './components/TodoList'
// // import { Todo } from './models/Todo';

// import Footer from './components/Footer'
// import TodoAppBar from './components/TodoAppBar';
// // import './styles.css'
// import { RootStore } from '../../stores/rootStore';

// export const TodoListContainer = ({ rootStore }: { rootStore: RootStore }) => { //(rootStore: RootStore) => {
//   const { todoStore } = rootStore;

//   const todoListActions = {
//     toggleTodoCompletion: (index: number) => {
//       todoStore.toggleTodoCompletion(index);
//     },
//     setEditingId: (index: number) => {
//       todoStore.setEditingId(index);
//     }
//   };

//   return (
//     <div className="App">
//       <Paper>
//         <TodoList
//           todos={todoStore.todos}
//           {...todoListActions}
//         />
//         <Footer
//           remaining={todoStore.remainingTodos}
//           total={todoStore.todos.length}
//         />
//       </Paper>
//     </div>
//   )
// };

// // export const App = observer(() => {


// //   // const toggleTodoCompletion = (index: number) => {
// //   //   store.toggleTodoCompletion(index);
// //   // } 

// //   // const startEditTodo = (index: number) => {
// //   //   store.toggleTodoCompletion(index);
// //   // } 

// //   return (
// //     <div className="App">
// //       <Paper>
// //         <h2>A Todo App yet again!</h2>
// //         <TodoList
// //           todos={store.todos}
// //           {...todoListActions}
// //         />
// //         <Footer
// //           remaining={store.remainingTodos}
// //           total={store.todos.length}
// //         />
// //       </Paper>
// //     </div>
// //   )
// // })

// // const rootElement = document.getElementById('root')
// // ReactDOM.render(<App />, rootElement)


// // export default App;
