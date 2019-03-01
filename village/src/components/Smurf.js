import React from 'react';
import {XCircle, Edit} from 'react-feather';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.data.name}</h3>
      <strong>{props.data.height} tall</strong>
      <p>{props.data.age} smurf years old</p>
      <div>
        <Edit onClick = {() => props.update(props.data)}/>
        <XCircle onClick = {() => props.delete(props.data.id)}/>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

