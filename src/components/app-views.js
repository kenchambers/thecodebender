import React, { Component } from 'react';
import HomeView from './views/home';
import AboutView from './views/about';
import CodeView from './views/code';
import ContactView from './views/contact';
import SocialView from './views/social';

export default class AppViews extends Component {
  static Home = () => (
    <div>
      <HomeView />
    </div>
  );
  static About = () => (
    <div>
      <AboutView />
    </div>
  );
  static Code = () => (
    <div>
      <CodeView />
    </div>
  );
  static Contact = () => (
    <div>
      <ContactView />
    </div>
  );
  static Social = () => (
    <div>
      <SocialView />
    </div>
  );
}
