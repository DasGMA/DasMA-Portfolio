import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import HomePage from './Components/HomePage/HomePage';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Projects from './Components/Projects/Projects';
/* import Blog from './Components/Blog/Blog'; */
import Foot from './Components/Footer/Foot';

class App extends Component {
  render() {
    return (
      <div className = 'app'>
        <Navigation />
        <main>
          <Switch>
            <Route exact path = '/' component = { HomePage } />
            <Route path = '/about' component = { About } />
            <Route path = '/resume' component = { Resume } />
            <Route path = '/projects' component = { Projects } />
            {/* <Route path = '/blog' component = { Blog } /> */}
          </Switch>
        </main>
        <Foot />
      </div>
    );
  }
}

export default App;
