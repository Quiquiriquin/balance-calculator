import React from 'react';
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DashboardHoc from "./components/Dashboard/DashboardHOC";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <div className={'app-content'}>
          <Route exact={true} path={'/dashboard'} component={DashboardHoc} />
        </div>
      </Router>
    </div>
  );
}

export default App;
