import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Dropdown, Menu } from 'semantic-ui-react'
import Home from './Home';
import Subpage from './Subpage';
import ListTransition from './ListTransitions';
import AnimatedRoutes from './AnimatedWrapper';
import Page1 from './PageTransition/FirstPage';
import Page2 from './PageTransition/SecondPage';
import Page3 from './PageTransition/ThirdPage';
import Page from './PageTransition';
import ContainerAnimations from './ContainerAnimations';
import SlideAnimations from './PageTransition/slide';

const RenderPage = Component => (
  <CSSTransition timeout={3000} classNames="fade" in={true}>
    <Component />
  </CSSTransition>
);

class App extends Component {
  render() {
    return (
      <div className="ui container">
          <Menu size='mini'>
              <Menu.Menu>
                  <Dropdown item text='Animate.Js'>
                      <Dropdown.Menu>
                          <Dropdown.Item><Link to="/">Home</Link></Dropdown.Item>
                          <Dropdown.Item><Link to="/subpage">Subpage</Link></Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
              </Menu.Menu>
              <Menu.Menu>
                  <Dropdown item text='Page Fade'>
                      <Dropdown.Menu>
                          <Dropdown.Item><Link to="/page1">Page 1</Link></Dropdown.Item>
                          <Dropdown.Item><Link to="/page2">Page 2</Link></Dropdown.Item>
                          <Dropdown.Item><Link to="/page3">Page 3</Link></Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
              </Menu.Menu>
              <Menu.Item name='messages'><Link to="/list">List</Link></Menu.Item>
              <Menu.Item name='home' ><Link to="/container">Containers</Link></Menu.Item>
              <Menu.Item name='messages'><Link to="/slide">Slide Pages</Link></Menu.Item>
          </Menu>
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
        <Route path="/container" component={ContainerAnimations} />
        <Route path="/slide" component={SlideAnimations} />
      </div>
    );
  }
}
export default App;
