import React, { Component } from 'react';
// import { strings } from '../../strings/strings';
// import { interpolate } from '../../components/util/interpolate';

export default class BaseComponent extends Component {
  constructor(props) {
    super(props);
    // this.strings = strings.english;
    // this.interpolate = interpolate;

    // NOTE: Comment out for production , dev only:
    // this.enableTestMode();
  }
}
