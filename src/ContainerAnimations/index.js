import React, { Component } from 'react';

class Container extends Component {
  state = { show: true, scale: false };
  onHide = () => this.setState({ show: false });
  onScale = () => this.setState({ scale: !this.state.scale });
  render() {
    return (
      <div>
        <div
          className={
            'page animated-page-wrapper ' + (!this.state.show ? 'fade-out' : '')
          }
        >
          <h1>Components</h1>
          <div className="ui message">
            <div className="header">Changes in Service</div>
            <p className={this.state.scale ? 'scale-out' : ''}>
              We just updated our privacy policy here to better service our
              customers. We recommend reviewing the changes.
            </p>
            <button className="ui primary button" onClick={this.onHide}>
              Hide
            </button>
            <button className="ui button" onClick={this.onScale}>
              Scale
            </button>
          </div>
          <div className="ui message slide-left">
            <div className="header">Slide Left</div>
            <p>
              We just updated our privacy policy here to better service our
              customers. We recommend reviewing the changes.
            </p>
          </div>
          <div className="ui message slide-right">
            <div className="header">Slide Right</div>
            <p>
              We just updated our privacy policy here to better service our
              customers. We recommend reviewing the changes.
            </p>
          </div>
          <div className="ui message slide-top">
            <div className="header">Slid Top</div>
            <p>
              We just updated our privacy policy here to better service our
              customers. We recommend reviewing the changes.
            </p>
          </div>
          <div className="ui message slide-bottom">
            <div className="header">Slid bottom</div>
            <p>
              We just updated our privacy policy here to better service our
              customers. We recommend reviewing the changes.
            </p>
          </div>
          <div className="ui message flip">
            <div className="header">Slid bottom</div>
            <p>
              We just updated our privacy policy here to better service our
              customers. We recommend reviewing the changes.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
