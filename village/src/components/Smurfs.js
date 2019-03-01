import React, { Component } from 'react';

import Smurf from './Smurf';
import axios from 'axios';

class Smurfs extends Component {
  constructor(props){
    super(props)

    this.state = {

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
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                delete = {this.handleDelete}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
