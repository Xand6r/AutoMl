import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { component as SignUpPage } from './components/train';
import { component as ModelPage } from './components/models';



function App() {
  return (
    <Switch>
      <Route exact  path='/' component={ModelPage} />
      <Route path='/train' component={SignUpPage} />
    </Switch>
  );
}

export default App;
