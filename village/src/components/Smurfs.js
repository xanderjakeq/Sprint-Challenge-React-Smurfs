import React, { Component } from 'react';

import Smurf from './Smurf';
import axios from 'axios';
import SmurfForm from './SmurfForm'

class Smurfs extends Component {
  constructor(props){
    super(props)

    this.state = {
      editingSmurf: null,
      editingSmurfData: {}
    }
  }
  handleDelete = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`).then(res => {
      console.log(res)
      this.props.updateSmurfs()
    }).catch(err => {
      console.log(err)
    })
  }
  handleUpdateClick = (id, data) => {
    console.log(data)
    this.setState({
      editingSmurf: id,
      editingSmurfData: data
    })
  }
  handleUpdate = (id, data) => {
    axios.put(`http://localhost:3333/smurfs/${id}`,data).then(res => {
      console.log(res)
      this.props.updateSmurfs()
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
                editingSmurf = {this.state.editingSmurf}
              />
            );
          })}
        </ul>
        {this.state.editingSmurf !== null ? <SmurfForm update handleUpdate = {this.handleUpdate} data = {this.state.editingSmurfData}/> : null}
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
