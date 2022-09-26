import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  // const apiKey = process.env.REACT_APP_NEWS_API;
  const apiKey = "9c8f3153684546338bc6cd92037f61db"

  const [progress, setPro] = useState(0);

  const setProgress = (progress) => {
    setPro(progress)
  }
  return (
    <div style={{backgroundImage:"url('https://thumbs.dreamstime.com/b/black-white-repeating-torn-newspaper-background-continuous-pattern-left-right-up-down-black-white-repeating-torn-133864679.jpg')"}}>
      <Router>
        <LoadingBar
          height={2}
          color='#f11946'
          progress={progress}
        />
        <div style={{backgroundImage:"url('https://thumbs.dreamstime.com/b/black-white-repeating-torn-newspaper-background-continuous-pattern-left-right-up-down-black-white-repeating-torn-133864679.jpg')"}}>
        <Navbar></Navbar>
        </div>
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key='home' pagesize={6} country={'in'} category={'general'}></News>}>
          </Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pagesize={6} country={'in'} category={'sports'}></News>}>
          </Route>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key='business' pagesize={6} country={'in'} category={'business'}></News>}>
          </Route>
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key='health' pagesize={6} country={'in'} category={'health'}></News>}>
          </Route>
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key='general' pagesize={6} country={'in'} category={'general'}></News>}>
          </Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pagesize={6} country={'in'} category={'technology'}></News>}>
          </Route>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key='science' pagesize={6} country={'in'} category={'science'}></News>}>
          </Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pagesize={6} country={'in'} category={'entertainment'}></News>}>
          </Route>
        </Routes>
      </Router>
    </div>
  )

}

export default App