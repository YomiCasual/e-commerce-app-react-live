import React, {Component } from 'react';
import {Route, Switch} from 'react-router-dom'

import Navbar from './components/navBar/Navbar';
import CardLists from './components/Card/CardLists'
import SinglePhone from './components/Phone/SinglePhone'
import ErrorPage from './components/Phone/ErrorPage'
import Cart from './components/Phone/Cart'
import Modal from './components/Modals/Modal'
import './App.css';


class App extends Component {
  

  render() {

  return (
  <div className="main-container">
  <Navbar />
  <Switch>
  <Route exact path="/" component={CardLists} />
  <Route exact path="/cart" component={Cart}/>
  <Route exact path="/room/:slug" component={SinglePhone}/>
  <Route exact component={ErrorPage} />
   </Switch>
   <Modal />
   </div>
  );
}

}



export default App

