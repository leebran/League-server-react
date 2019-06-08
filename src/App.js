import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import WhiteBoard from './containers/Whiteboard'
import CourseBarItem from './components/CourseBarItem'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import '../node_modules/font-awesome/css/font-awesome.min.css'

import UserPage from './components/UserPage'

function App() {
  return (
      <Router>
        <div>
          <CourseBarItem/>
          <div className="container">
              <Route
                  exact={true}
                  path="/Search/im getting"
                  component={WhiteBoard}/>

              <Route
                  exact={true}
                  path="/User/:userName"
                  component={UserPage}/>
          </div>
        </div>
      </Router>
  );
}

export default App;
