import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import Paper from '@material-ui/core/Paper';
import { hot } from 'react-hot-loader/root';

// import { todoStore } from './stores/todoStore';

import TodoList from './routes/Home/components/TodoList'
import { Todo } from './models/Todo';

import Footer from './routes/Home/components/Footer'
import TodoAppBar from './routes/Home/components/TodoAppBar';
// import './styles.css'
import { RootStore } from './stores/rootStore';
import { HomeContainer } from './routes/Home/HomeContainer';
import { Router } from 'react-router';

export const App = hot(({ history }: any) => {
  const rootStore = new RootStore;
  return (
    <HashRouter>
      <div className="App">

        <HomeContainer rootStore={rootStore}></HomeContainer>
      </div>
    </HashRouter>
  )
});


export default App;
