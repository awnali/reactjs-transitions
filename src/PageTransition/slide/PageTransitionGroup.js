import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Page = ({ children: Children }) => (
  <TransitionGroup>{Children}</TransitionGroup>
);
export default Page;
