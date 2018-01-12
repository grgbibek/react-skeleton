import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import Base from './components/base.jsx'
import Page1 from './components/page1.jsx'
import Page2 from './components/page2.jsx'

/*var Base = require('./components/base.jsx');
var Page1 = require('./components/page1.jsx');
var Page2 = require('./components/page2.jsx');*/

/*export const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component = {Base} >
        <Route path = "/page1" component = {Page1} />
        <Route path = "/page2" component = {Page2} />
        <Route path = "/hello" component = {Hello} />
      </Route>
    </BrowserRouter>
  )
}*/

export default class TestRouter extends Component {
  render(){
    return (
      <Router>
        <div>
          <Route exact path="/" component={Base}>
          </Route>
          <Route  path="/page1" component={Page1} />

        </div>
      </Router>
    )
  }
}
