import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import './App.css';
import PageContainer from './containers/PageContainer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
      <Router>
        <div>
          <PageContainer/>
        </div>
      </Router>
  );
}

export default App;
