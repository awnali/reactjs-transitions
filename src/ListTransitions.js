import React, { Component } from 'react';
import './App.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
class Home extends Component {
  constructor(...args) {
    super(...args);
    this.state = { items: [] };
  }
  removeFood = i => {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  };
  addFood = () =>
    this.setState({
      items: this.state.items.concat(`item ${this.state.items.length + 1}`),
      show: true,
    });
  onEnter = () => console.log('enter');
  onExit = () => console.log('exit');
  render() {
    return (
      <div>
        <h1>Listpage</h1>
        <button onClick={this.addFood}>Add</button>
        <ul>
          <TransitionGroup>
            {this.state.items.map((f, i) => (
              <CSSTransition
                timeout={1000}
                classNames="fade"
                onEnter={this.onEnter}
                onExit={this.onExit}
                in={true}
                key={i}
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
