import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios.post('http://localhost:3333/smurfs', this.state).then(res => {
      console.log(res.data)
      this.props.history.push('/')
      this.props.updateSmurfs()
    }).catch(err => {
      console.log(err)
    })
    
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            type = 'text'
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            type = 'number'
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            type = 'number'
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SmurfForm);
