// RNRF logic here
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Welcome from './components/welcome.js';
import RepoList from './components/repolist.js';
import RepoInfo from './components/repoinfo.js';

export default class Main extends Component{
  render(){
    return(
      <Router showNavigationBar={false}>
        <Scene key="root">
          <Scene key="Welcome" component={Welcome} hideNavBar={true} title="The big restaurant list" wrapRouter={true} initial={true} />
          <Scene key="RepoList" component={RepoList} hideNavBar={true} title="The big restaurant list"  wrapRouter={true} />
          <Scene key="RepoInfo" component={RepoInfo} hideNavBar={true} title="The big restaurant list" />
        </Scene>
      </Router>
    );
  }
}
