import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Page1 from './FirstPage';
import Page2 from './SecondPage';
import Page3 from './ThirdPage';
import Page4 from './FourthPage';

const PageSlide = props => (
  <CSSTransition
    {...props}
    classNames="slide-list"
    timeout={500}
    mountOnEnter={true}
    unmountOnExit={true}
    appear
  />
);

const SlideTransition = props => {
  const locationKey = props.location.pathname;

  return (
    <div>
        <Menu fluid widths={4}>
            <Menu.Item name='buy' ><Link to="/slide">Page 1</Link></Menu.Item>
            <Menu.Item name='sell'><Link to="/slide/trans2">Page 2</Link></Menu.Item>
            <Menu.Item name='rent'><Link to="/slide/trans3">Page 3</Link></Menu.Item>
            <Menu.Item name='rent1'><Link to="/slide/trans4">Page 4</Link></Menu.Item>
        </Menu>




      <TransitionGroup>
        <PageSlide key={locationKey}>
          <Switch location={props.location}>
            <Route path="/slide" component={Page1} />
            <Route path="/slide/trans2" component={Page2} />
            <Route path="/slide/trans3" component={Page3} />
          </Switch>
        </PageSlide>
      </TransitionGroup>
      <Route path="/slide/trans4" component={Page4} />
    </div>
  );
};

export default SlideTransition;
