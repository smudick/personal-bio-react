import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../views/Main';
import About from '../views/About';
import Skills from '../views/Skills';
import NotFound from '../views/NotFound';
import Projects from '../views/Projects';

export default function Routes() {
  return (
    <div className='App'>
      <Switch>
        <Route
          exact
          path='/'
          component={() => <Main />}
        />
        <Route
          exact
          path='/about'
          component={About}
        />
        <Route
          exact
          path='/skills'
          component={Skills}
        />
        <Route
          exact
          path='/projects'
          component={Projects}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
