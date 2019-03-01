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

  componentDidMount(){
    if(this.props.update){
      let data = this.props.data
      this.setState({
        name: data.name,
        age: data.age,
        height: data.height
      })
    }
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
    let updatingStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
    height: '100%',
    backgroundColor: 'white',
    }
    return (
      <div className="SmurfForm" style = {this.props.update? updatingStyle: {}}>
        <form onSubmit={this.props.update ? () => this.props.handleUpdate(this.props.data.id, this.state): this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            type = 'text'
          />
          
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            type = 'number'
          />
          
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            type = 'number'
          />
          <button type="submit">{this.props.update ? 'Update' : 'Add to the village'}</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SmurfForm);
