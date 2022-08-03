import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';

const node = document.getElementById('root')
const root = 
  React.createElement ('div', {}, //
    React.createElement ('h1', {}, "Hello World!", //
      React.createElement ('a', {href: 'https://vk.com/al_im.php'},
        React.createElement ('h1', {}, "React in Action"),
        React.createElement ('em', {}, "...and other shit!")
      )
    )
  );
render(root, node); //

reportWebVitals();
