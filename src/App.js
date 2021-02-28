import React from 'react';

import { Route, Switch } from 'react-router-dom';

// layout

import Layout from './layout';

// pages

import { HomePage } from './pages/home';
import { CbtExamsPage } from './pages/cbtExams';

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cbt-examination" component={CbtExamsPage} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
