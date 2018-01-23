import React, { Component } from 'react';
import './App.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
class Home extends Component {
  constructor(...args) {
    super(...args);
    this.state = { items: ['item1', 'item2', 'item3'] };
  }
  removeFood = i => {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  };
  addFood = () =>
    this.setState({
      items: this.state.items.concat(`item ${this.state.items.length + 1}`),
    });
  onEnter = () => console.log('enter');
  onExit = () => console.log('exit');
  render() {
    return (
      <div className="ui container">
        <h1>Listpage</h1>
        <button onClick={this.addFood}>Add</button>
        <h1>Fade transition</h1>
        <ul>
          <TransitionGroup>
            {this.state.items.map((f, i) => (
              <CSSTransition
                timeout={3000}
                classNames="fade"
                onEnter={this.onEnter}
                onExit={this.onExit}
                in={true}
                key={i}
                appear
              >
                <li>
                  {f}
                  <span onClick={() => this.removeFood(i)}> X</span>
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
        <h1>Flip transition ( with Css only )</h1><span></span>
        <ul>
          {this.state.items.map((f, i) => (
            <li className="flip-list-css-appear-active" key={i}>
              {f}
              <span onClick={() => this.removeFood(i)}> X</span>
            </li>
          ))}
        </ul>
        <h1>Flip transition</h1>
        <ul>
          <TransitionGroup>
            {this.state.items.map((f, i) => (
              <CSSTransition
                timeout={1000}
                classNames="flip-item"
                onEnter={this.onEnter}
                onExit={this.onExit}
                in={true}
                key={i}
                appear
              >
                <li style={{backgroundColor: 'red', width: '70px'}}>
                  {f}
                  <span onClick={() => this.removeFood(i)}> X</span>
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
        <h1>Slide transition</h1>
        <ul>
          <TransitionGroup>
            {this.state.items.map((f, i) => (
              <CSSTransition
                timeout={1000}
                classNames="slide-list"
                onEnter={this.onEnter}
                onExit={this.onExit}
                in={true}
                key={i}
                appear
              >
                <li>
                  {f}
                  <span onClick={() => this.removeFood(i)}> X</span>
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
      </div>
    );
  }
}
export default Home;
