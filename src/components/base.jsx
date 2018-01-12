import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route
}  from 'react-router-dom'

export default class Base extends Component{
    render(){
        return(
          <ul>
            <li><Link to="/">Base</Link></li>
            <li><Link to="/page1">Page 1</Link></li>
            <li><Link to="/page2">Page 2</Link></li>
          </ul>
          /*<div>
            <Router>
                <Route exact path="/" component={Base} />

                <Route  path="/page1" component={Page1} />
             </Router>
          </div>*/
        )
    }
}
