import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import Home from "./Home";
import Subpage from "./Subpage";
import AnimatedRoutes from "./AnimatedWrapper";

const firstChild = props => {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="TopBar">
                    <Link to="/">Home</Link>
                    <Link to="/subpage">Subpage</Link>
                </div>
                <Switch>
                    <AnimatedRoutes>
                        <Route exact path="/" component={Home} />
                        <Route path="/subpage" component={Subpage} />
                    </AnimatedRoutes>
                </Switch>
            </div>
        );
    }
}
export default App;