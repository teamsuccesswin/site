import React, { Component, PropTypes as T } from 'react';
import { routeNode } from 'react-router5';
import HomeView from './views/Home';

//  Setup homeroute node
const HomeRoute = routeNode('root')(HomeView);

/**
 * Base AppWrapper Class for loading in app components
 * @class AppWrapper
 */
export default class AppWrapper extends Component {
  constructor () {
    super();
  }

  render () {
    const { history, router } = this.props;
    return (
      <div>
        <header>
          <h4>Team Success Win</h4>
        </header>
        <div>
          <HomeRoute></HomeRoute>
        </div>
      </div>
    );
  }
}
