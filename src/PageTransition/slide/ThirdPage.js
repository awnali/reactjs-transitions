import React, { Component } from 'react';

const renderPage = ({ children: Children }) => {
  return { Children };
};
class ThirdPage extends Component {
  render() {
    return (
        <div className="ui container">
          <h1>Page 3</h1>
          <p>Hello from a page 3</p>
        </div>
    );
  }
}

export default ThirdPage;
