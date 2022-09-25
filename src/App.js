import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar></Navbar>
          <Routes>
          <Route exact path="/" element={<News key='home' pagesize={6} country={'in'} category={'general'}></News>}>
            </Route>
            <Route exact path="/sports" element={<News key='sports' pagesize={6} country={'in'} category={'sports'}></News>}>
            </Route>
            <Route exact path="/business" element={<News key='business' pagesize={6} country={'in'} category={'business'}></News>}>
            </Route>
            <Route exact path="/health" element={<News key='health' pagesize={6} country={'in'} category={'health'}></News>}>
            </Route>
            <Route exact path="/general" element={<News key='general' pagesize={6} country={'in'} category={'general'}></News>}>
            </Route>
            <Route exact path="/technology" element={<News key='technology' pagesize={6} country={'in'} category={'technology'}></News>}>
            </Route>
            <Route exact path="/science" element={<News key='science' pagesize={6} country={'in'} category={'science'}></News>}>
            </Route>
            <Route exact path="/entertainment" element={<News key='entertainment' pagesize={6} country={'in'} category={'entertainment'}></News>}>
            </Route>
          </Routes>
        </Router>
        </div>
    )
  }
}
