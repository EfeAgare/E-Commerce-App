import './App.css';
import {Switch, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import PageNotFound from './components/PageNotFound';
import React, { Component } from 'react'
import DisplayModal from './components/DisplayModal';

export default class App extends Component {
  render() {
    return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route exact path="/details" component={Details}/>
        <Route exact path="/cart" component={Cart}/>
        <Route component={PageNotFound}/>
      </Switch>
      <DisplayModal/>
    </React.Fragment>
    )
  }
}


