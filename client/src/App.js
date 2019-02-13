import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import HomePage from './Components/HomePage/HomePage';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Projects from './Components/Projects/Projects';
import Blog from './Components/Blog/Blog';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
          <Route exact path = '/' component = { HomePage } />
          <Route path = '/about' component = { About } />
          <Route path = '/resume' component = { Resume } />
          <Route path = '/projects' component = { Projects } />
          <Route path = '/blog' component = { Blog } />
      </div>
    );
  }
}

export default App;
