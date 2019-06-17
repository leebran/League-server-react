import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import WhiteBoard from './containers/Whiteboard'
import CourseBarItem from './components/CourseBarItem'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import '../node_modules/font-awesome/css/font-awesome.min.css'

function App() {
  return (
      <Router>
        <div>
          <WhiteBoard/>
        </div>
      </Router>
  );
}

export default App;
