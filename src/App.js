import React from 'react';

import { Route, Switch } from 'react-router-dom';

// layout

import Layout from './layout';

// pages

import { HomePage } from './pages/home';
import { CbtExamsPage } from './pages/cbtExams';
import { ExamsPage } from './pages/exams';

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cbt-examinations" component={CbtExamsPage} />
          <Route path="/examinations" component={ExamsPage} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
