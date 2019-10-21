import React from 'react'
import { HashRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader/root';

import { RootStore } from './stores/rootStore';
import { HomeContainer } from './routes/Home/HomeContainer';

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
