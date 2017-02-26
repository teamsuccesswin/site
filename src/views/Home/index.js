import { routeNode } from 'react-router5';
import React, { createElement, Component, PropTypes as T } from 'react';

//  Components
import MemberTile from '../../components/MemberTile';

//  Load JSON Data for Members
import members from './members.json';

/**
* Base Home View which will be base for app
*/
export default class Home extends Component {

  /**
  * Renders a list of member tiles using member json data
  */
  renderList () {
    const list = members.map(member => <MemberTile key={member.name} {...member} />);
    return list;
  }

  render () {
    return (
      <div>
        <h1>Check out cool Members</h1>
        { this.renderList() }
      </div>
    );
  }
}
