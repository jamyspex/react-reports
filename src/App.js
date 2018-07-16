import React, { Component } from 'react';
import Page from './Page.jsx';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.pageConfig = {
      width: 8.5,
      height: 11,
      unit: 'in'

    }
  }

  render() {

    var pages = []

    for (var i = 0; i < 10; i++) {
      pages.push(<Page config={this.pageConfig} pageNumber={i} />)
    }


    return (
      <div>
        {pages}
      </div>
    );
  }
}

export default App;
