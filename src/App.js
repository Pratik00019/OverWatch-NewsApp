import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {

  apiKey =process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          
          <LoadingBar
            height={2}
            color='#f11946'
            progress={this.state.progress}
          />
          <Navbar></Navbar>

          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='home' pagesize={6} country={'in'} category={'general'}></News>}>
            </Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='sports' pagesize={6} country={'in'} category={'sports'}></News>}>
            </Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='business' pagesize={6} country={'in'} category={'business'}></News>}>
            </Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='health' pagesize={6} country={'in'} category={'health'}></News>}>
            </Route>
            <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pagesize={6} country={'in'} category={'general'}></News>}>
            </Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='technology' pagesize={6} country={'in'} category={'technology'}></News>}>
            </Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='science' pagesize={6} country={'in'} category={'science'}></News>}>
            </Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='entertainment' pagesize={6} country={'in'} category={'entertainment'}></News>}>
            </Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
