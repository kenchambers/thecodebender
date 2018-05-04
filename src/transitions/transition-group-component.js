//https://medium.com/lalilo/dynamic-transitions-with-react-router-and-react-transition-group-69ab795815c9
//
import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const childFactoryCreator = props => child => React.cloneElement(child, props);

export const Transitions = ({
  transition = '',
  duration = 0,
  pageKey,
  children
}) => (
  <TransitionGroup
    childFactory={childFactoryCreator({
      classNames: transition,
      timeout: duration
    })}>
    <CSSTransition key={pageKey} timeout={1000}>
      <div>{children}</div>
    </CSSTransition>
  </TransitionGroup>
);
