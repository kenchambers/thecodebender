import React, { Component } from 'react';
import { PictureFrame } from '../random/picture-frame';
import { Transitions } from '../../transitions/transition-group-component';
import './code.css';

class CodeView extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: 'rgb(27, 28, 31)',
          width: '100%'
        }}>
        <div id="code-container">
          <div className="block-1">
            <PictureFrame />
          </div>
          <div className="block-3">
            <PictureFrame />
          </div>
          <div className="block-4">
            <PictureFrame />
          </div>
          <div className="block-5">
            <PictureFrame />
          </div>
          <div className="block-8">
            <PictureFrame />
          </div>
          <div className="block-10">
            <PictureFrame />
          </div>
          <div className="block-12">
            <PictureFrame />
          </div>
          <div className="block-15">
            <PictureFrame />
          </div>
          <div className="block-16">
            <PictureFrame />
          </div>
          <div className="block-17">
            <PictureFrame />
          </div>
          <div className="block-19">
            <PictureFrame />
          </div>
          <div className="block-20">
            <PictureFrame />
          </div>

          <div className="block-22">
            <PictureFrame />
          </div>
          <div className="block-23">
            <PictureFrame />
          </div>
          <div className="block-25">
            <PictureFrame />
          </div>
        </div>
      </div>
    );
  }
}

export default CodeView;
