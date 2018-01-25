import React, { Component } from 'react';
import './App.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Transition = ({ items, removeItem, classNames, timeout = 1000, onEnter, onExit }) => (
  <ul>
    <TransitionGroup>
      {items.map((f, i) => (
        <CSSTransition
          timeout={timeout}
          classNames={classNames}
          onEnter={onEnter}
          onExit={onExit}
          in={true}
          key={i}
          appear
        >
          <li style={{backgroundColor: 'blue'}}>
            {f}
            <span onClick={() => removeItem(i)}> X</span>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  </ul>
);

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
        <Transition
          items={this.state.items}
          classNames="fade"
          timeout={1000}
          onEnter={this.onEnter}
          onExit={this.onExit}
          removeItem={this.removeFood}
        />
        <h1>Flip transition ( with Css only )</h1>
        <span />
        <ul>
          {this.state.items.map((f, i) => (
            <li className="flip-list-css-appear-active" key={i}>
              {f}
              <span onClick={() => this.removeFood(i)}> X</span>
            </li>
          ))}
        </ul>
        <h1>Flip transition</h1>
        <Transition
          items={this.state.items}
          classNames="flip-item"
          timeout={1000}
          onEnter={this.onEnter}
          onExit={this.onExit}
          removeItem={this.removeFood}
        />
        <h1>Slide transition</h1>
        <Transition
          items={this.state.items}
          classNames="slide-list"
          timeout={1000}
          onEnter={this.onEnter}
          onExit={this.onExit}
          removeItem={this.removeFood}
        />
      </div>
    );
  }
}
export default Home;
