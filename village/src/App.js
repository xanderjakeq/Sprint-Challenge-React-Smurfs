import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount(){
    console.log('didmount')
    this.getSmurfs()
  }
  getSmurfs = () => {
    axios.get('http://localhost:3333/smurfs').then(res => {
      this.setState({
        smurfs: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <Route exact path = "/add" render = {props => <SmurfForm {...props} updateSmurfs = {this.getSmurfs}/>}/>
          <Route path = '/' exact render= {props => <Smurfs {...props} updateSmurfs = {this.getSmurfs} smurfs={this.state.smurfs} />}/>
        </div>
      </Router>
    );
  }
}

export default App;
