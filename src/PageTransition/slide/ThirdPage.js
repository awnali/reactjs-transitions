import React, { Component } from 'react';
import { CSSTransition, Transition } from 'react-transition-group';

const renderPage = ({ children: Children }) => {
  return { Children };
};
class ThirdPage extends Component {
  onEnter = () => console.log('enter');
  onExit = () => console.log('exit');
  render() {
    return (
      <CSSTransition
        timeout={3000}
        classNames="slide-list"
        in={true}
        onEnter={this.onEnter}
        onExit={this.onExit}
        onExiting={this.onExit}
        onExited={this.onExit}
      >
        <div className="ui container">
          <h1>Page 3</h1>
          <p>Hello from a page 3</p>
        </div>
      </CSSTransition>
    );
  }
}

export default ThirdPage;
