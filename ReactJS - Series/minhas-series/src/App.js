import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Menu from './Menu'
import Home from './Home'
import NewSeries from './NewSeries'
import Series from './Series'

const About = () => <section className='intro-section'><h1>Sobre</h1></section>

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Menu />

          <Route exact path='/' component={Home} />
          <Route exact path='/series/:genre' component={Series} />
          <Route exact path='/series/edit/:id/' component={EditSeries} />
          <Route exact path='/new' component={NewSeries} />
          <Route exact path='/about' component={About} />

        </div>
      </Router>
    );
  }
}

export default App
