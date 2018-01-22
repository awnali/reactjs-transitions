import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class SecondPage extends Component {
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
      >
        <div className="ui container">
          <h1>Page 2</h1>
          <p>Hello from a page 2</p>
        </div>
      </CSSTransition>
    );
  }
}

export default SecondPage;
