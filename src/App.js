import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Home from './Home';
import Subpage from './Subpage';
import ListTransition from './ListTransitions';
import AnimatedRoutes from './AnimatedWrapper';
import Page1 from './PageTransition/FirstPage';
import Page2 from './PageTransition/SecondPage';
import Page3 from './PageTransition/ThirdPage';
import Page from './PageTransition';

const RenderPage = Component => (
  <CSSTransition timeout={1000} classNames="fade" in={true}>
    <Component />
  </CSSTransition>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TopBar">
          <Link to="/">Home</Link>
          <Link to="/subpage">Subpage</Link>
          <Link to="/list">List</Link>

          <Link to="/page1">Page 1</Link>
          <Link to="/page2">Page 2</Link>
          <Link to="/page3">Page 3</Link>
        </div>
        <Switch>
          <AnimatedRoutes>
            <Route exact path="/" component={Home} />
            <Route path="/subpage" component={Subpage} />
            <Route path="/list" component={ListTransition} />
          </AnimatedRoutes>
        </Switch>
        <Page>
          <Route path="/page1" component={() => RenderPage(Page1)} />
          <Route path="/page2" component={() => RenderPage(Page2)} />
          <Route path="/page3" component={() => RenderPage(Page3)} />
        </Page>
      </div>
    );
  }
}
export default App;
