import React, { Component } from 'react';

import Smurf from './Smurf';
import axios from 'axios';
import SmurfForm from './SmurfForm'

class Smurfs extends Component {
  constructor(props){
    super(props)

    this.state = {
      editingSmurfData: null
    }
  }
  handleDelete = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`).then(res => {
      this.props.updateSmurfs()
    }).catch(err => {
      console.log(err)
    })
  }
  handleUpdateClick = (data) => {
    this.setState({
      editingSmurfData: data
    })
  }
  handleUpdate = (e, id, data) => {
    e.preventDefault()
    axios.put(`http://localhost:3333/smurfs/${id}`,data).then(res => {
      this.props.updateSmurfs()
      this.setState({
        editingSmurfData: null
      })
    }).catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                data = {smurf} 
                key={smurf.id}
                delete = {this.handleDelete}
                update = {this.handleUpdateClick}
              />
            );
          })}
        </ul>
        {this.state.editingSmurfData != null? <SmurfForm update handleUpdate = {this.handleUpdate} data = {this.state.editingSmurfData}/> : null}
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
