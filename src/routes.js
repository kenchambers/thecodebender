import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AppViews from './components/app-views';

export const Routes = () => {
  return (
    <React.Fragment>
      <Route exact path="/" render={props => <AppViews.Home {...props} />} />
      <Route
        exact
        path="/about"
        render={props => <AppViews.About {...props} />}
      />
      <Route
        exact
        path="/code"
        render={props => <AppViews.Code {...props} />}
      />
      <Route
        exact
        path="/contact"
        render={props => <AppViews.Contact {...props} />}
      />
      <Route
        exact
        path="/social"
        render={props => <AppViews.Social {...props} />}
      />
    </React.Fragment>
  );
};
