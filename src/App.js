import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import {Redirect, Route,Switch} from 'react-router-dom'
import React from 'react'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
      <Route path='/home'><Home/></Route>
      <Route path='/about'><About/></Route>
      <Route path='/services'><Services/></Route>
      <Route path='/Contact'><Contact/></Route>
      <Redirect to='/home'/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
