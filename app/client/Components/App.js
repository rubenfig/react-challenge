import React from 'react'
import MainComponent from './main'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route component={MainComponent}/>
    </Switch>
  );
}

export default App;
