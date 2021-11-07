import * as React from 'react';
import history from './history';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export interface AppProps {}

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Blog = React.lazy(() => import('./pages/Blog'));

const App : React.FC<AppProps> = (
  props
) => {
  return (
    <React.Suspense fallback={<p> loading </p>}>
      <Router history={history}>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/blog">blog</Link>
          </li>
        </ul>

        <div style={{ margin: '2rem 4rem' }}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
          </Switch>
        </div>
      </Router>
    </React.Suspense>
  );
}

export default App;
