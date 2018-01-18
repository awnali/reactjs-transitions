import React, { Component } from 'react';
import './App.css';
class Home extends Component {
  constructor(...args) {
    super(...args);
    this.state = { items: [] };
  }
  render() {
    return (
      <div className="page">
        <h1>Homepage</h1>
        <p>Hello from a home page!</p>
      </div>
    );
  }
}
export default Home;
