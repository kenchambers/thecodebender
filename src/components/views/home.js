// clouds
// https://codepen.io/ewendel/pen/cFJyl

import React, { Component } from 'react';
import './home.css';
import { Parallax, Background } from 'react-parallax';

class HomeView extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: 'rgb(27, 28, 31)',
          width: '100%',
          overflow: 'hidden'
        }}>
        <Parallax style={{ height: 500 }} strength={300}>
          <Background>
            <div id="clouds">
              <div className="cloud x1" />
              <div className="cloud x2" />
              <div className="cloud x3" />
              <div className="cloud x4" />
              <div className="cloud x5" />
            </div>
          </Background>
        </Parallax>
      </div>
    );
  }
}

export default HomeView;
