import React from 'react';
import { Switch, Route,  withRouter } from 'react-router-dom';
import Home from 'containers/Home'
import './index.scss'

class App extends React.Component {
  render(){
    return (
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
    )
  }
}

export default withRouter(App);