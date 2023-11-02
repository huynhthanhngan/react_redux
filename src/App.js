// App.js

import React, { Component } from 'react';
import AllPostContainer from './containers/AllPostContainer';
import PostFormContainer from './containers/PostFormContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          test redux
        </h1>
        <PostFormContainer />
        <AllPostContainer />
      </div>
    );
  }
}

export default App;
