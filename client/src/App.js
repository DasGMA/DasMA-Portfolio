import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import HomePage from './Components/HomePage/HomePage';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Projects from './Components/Projects/Projects';
/* import Blog from './Components/Blog/Blog'; */
import Foot from './Components/Footer/Foot';
import Contacts from './Components/Contacts/Contacts';
import { TransitionGroup, Transition } from 'react-transition-group';
import { play, exit } from './Components/timelines';
class App extends Component {
  render() {
    return (
      <div className = 'app'>
        <Navigation />
        <Route render = {({location}) => {
            const { pathname, key } = location;
            return (
              <TransitionGroup component = {null}>
                <Transition 
                  key = {key}
                  appear = {true}
                  onEnter = {(node, appears) => play(pathname, node, appears)}
                  onExit = {(node, appears) => exit(node, appears)}
                  timeout = {{enter: 750, exit: 150}}
                >
                  <main>
                    <Switch location = {location}>
                      <Route exact path = '/' component = { HomePage } />
                      <Route path = '/about' component = { About } />
                      <Route path = '/resume' component = { Resume } />
                      <Route path = '/projects' component = { Projects } />
                      <Route path = '/contact' component = { Contacts } />
                      {/* <Route path = '/blog' component = { Blog } /> */}
                    </Switch>
                  </main>
                </Transition>
              </TransitionGroup>
            )}} 
        />
        <Foot />
      </div>
    );
  }
}

export default App;
