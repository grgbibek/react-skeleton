import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'


ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

/*
 import  TestRouter  from './Routes.jsx'

 ReactDOM.render(
 <TestRouter />,
 document.getElementById('app')
 );
 */



/*
var React = require('react');
var ReactDOM = require('react-dom');
var Hello = require('./components/hello.jsx');

ReactDOM.render(<Hello />,document.getElementById('app'));*/

/*
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './components/app.jsx';

ReactDOM.render((
    <BrowserRouter>
      <Route path="/" component={App}/>
    </BrowserRouter>
  ),
  document.getElementById('root')
);
*/

