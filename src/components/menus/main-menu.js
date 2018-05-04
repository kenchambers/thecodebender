import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-three.css';
import './menu-styles.css';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { slide, scale, slideInUp } from '../../transitions/index';

const gridStyles = {
  container: {
    border: '1px solid green',
    display: 'grid',
    alignContent: 'space-evenly',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridTemplateRows: 'auto',
    gridTemplateAreas: 'content content content content content'
  },

  mainMenuButton: {
    border: '1px solid red'
  }
};

const animationStyles = {
  fadeIn: {
    animation: 'x 600ms',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
};

const menuButtons = [
  {
    id: 1,
    text: 'home',
    path: '/'
  },
  {
    id: 2,
    text: 'about',
    path: '/about'
  },
  {
    id: 3,
    text: 'code',
    path: '/code'
  },
  {
    id: 4,
    text: 'contact',
    path: '/contact'
  },
  {
    id: 5,
    text: 'social',
    path: '/social'
  }
];

const onClickTransition = () => {};

const Button = ({ id, text, path, history }) => {
  return (
    <div>
      <div onClick={() => history.push({ pathname: path, state: slideInUp })}>
        <AwesomeButton type="gplus">{text}</AwesomeButton>
      </div>
    </div>
  );
};

class MainMenu extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <StyleRoot style={gridStyles.container}>
          {menuButtons.map(button => {
            const { id, text, path } = button;
            const buttonProps = {
              id,
              text,
              path,
              history
            };
            return (
              <div
                className={`main-menu-button`}
                style={{
                  ...animationStyles.fadeIn,
                  ...gridStyles.mainMenuButton
                }}
                key={button.id}>
                <Button {...buttonProps} />
              </div>
            );
          })}
        </StyleRoot>
      </div>
    );
  }
}

export default MainMenu;
